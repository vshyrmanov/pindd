import { useState, useRef } from 'react'
import * as Styled from './demo.styled';

interface IData {
    weight: string | undefined;
    price?: string;
}

const Demo = () => {
    const [data, setData] = useState<IData[]>([]);
    const [isResetBtn, setIsResetBtn] = useState(false);
    const weightRef = useRef(null);
    const generalSumm = useRef(null);

    const getResult = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const convertedGeneralSumm = +generalSumm?.current?.value.replace(",", ".");
        const allWeight = data.reduce((acc, prev) => acc += +prev.weight, 0);
        const eachValuePercent = data.map(item => +((item.weight as unknown as number / allWeight) * 100).toFixed(2));
        const eachOrderCost = eachValuePercent.map(item => ((+item / 100) * convertedGeneralSumm).toFixed(2));
        setData(prev => prev.map((e, weightIndex)=> ({weight: e.weight, price: eachOrderCost[weightIndex]})))
        setIsResetBtn(true);
    }

    const addWeight = () => {
           // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const validWeight = weightRef.current.value.replace(",", ".");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        setData(prev => [...prev, { weight: validWeight }])
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setTimeout(() => weightRef.current.value = "", 100)
    }
    const resetAll = () => {
        setData([]);
        setIsResetBtn(false);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        generalSumm.current.value = "";
    };

    return (
    <>
        <Styled.Main>
            <Styled.Form>
                {data.map((e, i) => 
                    <Styled.List key={`${e.weight}_${i}`}>
                    <span>
                        {`${i + 1}: ${e.weight} gm/ `}
                    <p>{e?.price ? ` price: ${e?.price} $`: ""}</p>
                    </span>
                    <Styled.RemoveBtn onClick={() => setData(prev => prev.filter(prevItem => prevItem.weight !== e.weight))}>
                        X
                    </Styled.RemoveBtn >
                    </Styled.List>
                )}
            </Styled.Form>
            <Styled.WeightForm>
                <label>Order weight</label>
                <input type="text" ref={weightRef}/>
                <Styled.AddBtn onClick={addWeight}>
                    Add order
                </Styled.AddBtn >
            </Styled.WeightForm>
        </Styled.Main>
        <Styled.ResultForm>
            <label>General summ</label>
            <input ref={generalSumm} />
            <Styled.CalculateBtn onClick={getResult}>
                Calculate
            </Styled.CalculateBtn>
            {isResetBtn && 
            <Styled.ResetBtn onClick={resetAll}>
                Reset all
            </Styled.ResetBtn>}
        </Styled.ResultForm>
    </>
    )
}

export default Demo;