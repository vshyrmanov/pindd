/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [currencyInput, setCurrencyInput] = useState("");
  const [currencyResult, setCurrencyResult] = useState();
  const [isLoading, setLoading] = useState(false);
  

  const [data, setData] = useState([]);
  const [weight, setWeight] = useState("");
  const [generalSumm, setGeneralSumm] = useState("");

  const fetchData = async (amount) => {
    setLoading(true);
    await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=USD&have=CNY&amount=${amount}`, {
      headers: {
              'X-Api-Key': '/SUma68HA86jbNfZFVM+sw==ElCf6HwnJbsNuEjn',
            },
    })
    .then(r => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setCurrencyResult(r.data.new_amount);
      setLoading(false);
    })
  };


  const getResult = () => {
    const allWeight = data.reduce((acc, prev) => acc += +prev.weight, 0);

    const eachValuePercent = data.map(item => +((item.weight / allWeight) * 100).toFixed(2));

    const eachOrderCost = eachValuePercent.map(item => ((+item / 100) * +generalSumm).toFixed(2));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    setData(prev => prev.map((e, weightIndex)=> ({weight: e.weight, price: eachOrderCost[weightIndex]})))

  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #bdbdbd",
        width: "320px",
        padding: "10px",
        borderRadius: "5px",

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
          height: "45px",
          backgroundColor: "#009688",
          border: "none",
          color: "#fff",
        }}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => fetchData(currencyInput)}>{isLoading ? "Converting ..." : "Convert"}</button>
      </div>
      
      <div
        style={{
          border: "1px solid #bdbdbd",
          margin: "20px 0 0 0",
          width: "320px",
          padding: "10px",
        borderRadius: "5px",
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
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            key={`${e.weight}_${i}`}
            style={{ 
              width: "95%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "5px 0",
             }}>
              <span style={{ display: "flex", width: '100%', alignItems: "center" }}>
                {`${i + 1}: ${e.weight} gm/ `}
              <p style={{ color: "#4caf50", fontWeight: "600", }}>{e?.price ? ` price: ${e?.price} $`: ""}</p>
              </span>
              <button 
                style={{
                  backgroundColor: "#f44336",
                  border: "none",
                  height: "20px"
                }}
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
            type="text" 
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
              height: "45px",
              backgroundColor: "#00bcd4",
              border: "none",
              color: "#fff",
            }}
          onClick={() => {
            setData(prev => [...prev, {weight}]);
            setWeight("");
          }}>Add order</button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #bdbdbd",
          margin: "20px 0 0 0",
          width: "320px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <label 
          
        >General summ</label>
        <input 
          style={{
            all: 'unset',
            borderBottom: "1px solid #bdbdbd",
            margin: "10px 0"
          }}
        value={generalSumm} onChange={e => setGeneralSumm(e.target.value)}/>
        <button 
          style={{
            height: "45px",
            backgroundColor: "#8bc34a",
            border: "none",
            color: "#fff",
          }}
        onClick={() => getResult()}>Calculate</button>
      </div>
    </>
  )
}

export default App
