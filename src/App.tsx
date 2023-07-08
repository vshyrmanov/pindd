import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [currencyInput, setCurrencyInput] = useState("");
  const [currencyResult, setCurrencyResult] = useState(0);
  const [isLoading, setLoading] = useState(false);
  

  const [data, setData] = useState([]);
  const [weight, setWeight] = useState(0);
  const [generalSumm, setGeneralSumm] = useState(0);

  const fetchData = async (amount) => {
    setLoading(true);
    await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=USD&have=CNY&amount=${amount}`, {
      headers: {
              'X-Api-Key': '/SUma68HA86jbNfZFVM+sw==ElCf6HwnJbsNuEjn',
            },
    })
    .then(r => {
      setCurrencyResult(r.data.new_amount);
      setLoading(false);
    })
  };


  const getResult = () => {
    const allWeight = data.reduce((acc, prev) => acc += +prev.weight, 0);

    const eachValuePercent = data.map(item => +((item.weight / allWeight) * 100).toFixed(2));

    const eachOrderCost = eachValuePercent.map(item => ((+item / 100) * +generalSumm).toFixed(2));

    setData(prev => prev.map((e, weightIndex)=> ({weight: e.weight, price: eachOrderCost[weightIndex]})))

  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #bdbdbd",
        width: "320px",

      }}>
        <h3>{currencyResult} USD</h3>
        <label>CNY to USD</label>
        <input style={{
          all: 'unset',
          borderBottom: "1px solid #bdbdbd",
          margin: "10px 0"
        }} type='number' value={currencyInput} onChange={(e) => setCurrencyInput(e.target.value)} />
        <button 
        style={{
          height: "45px"
        }}
        onClick={() => fetchData(currencyInput)}>{isLoading ? "Converting ..." : "Convert"}</button>
      </div>
      
      <div
        style={{
          border: "1px solid #bdbdbd",
          margin: "20px 0 0 0"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((e, i) => 
            <div 
            key={`${e.weight}_${i}`}
            style={{ 
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              // border: "1px solid red",
              margin: "5px",
             }}>
              <span >{`${i + 1}: ${e.weight} gm/ price: ${e?.price || ""} $`}</span>
              <button 
                onClick={() => setData(prev => prev.filter(prevItem => prevItem.weight !== e.weight))}
              >X</button>
            </div>
            )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

          }}
        >
          <label>Order weight</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            style={{
              all: 'unset',
              borderBottom: "1px solid #bdbdbd",
              margin: "10px 0"
            }}
          />
          <button 
            style={{
              height: "45px"
            }}
          onClick={() => {
            setData(prev => [...prev, {weight}]);
            setWeight(0);
          }}>Add order</button>
        </div>
      </div>

      <div>
        <label>General summ</label>
        <input type="number" value={generalSumm} onChange={e => setGeneralSumm(e.target.value)}/>
        <button onClick={() => getResult()}>Calculate</button>
      </div>
    </>
  )
}

export default App
