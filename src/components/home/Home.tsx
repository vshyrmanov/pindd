/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useRef } from 'react';
import * as Styled from './home.styled';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineCalculate } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

const Home = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [isResetBtn, setIsResetBtn] = useState(false);
    const weightRef = useRef(null);
    const generalSumm = useRef(null);

    const showCalc = () => {
        setShow(prev => !prev)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        weightRef?.current?.focus()
    }

    const getResult = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const convertedGeneralSumm = +generalSumm?.current?.value.replace(",", ".");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        const allWeight = data.reduce((acc, prev) => acc += +prev.weight, 0);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const eachValuePercent = data.map(item => +((item.weight as unknown as number / allWeight) * 100).toFixed(2));
        const eachOrderCost = eachValuePercent.map(item => ((+item / 100) * convertedGeneralSumm).toFixed(2));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        setData(prev => prev.map((e, weightIndex)=> ({weight: e.weight, price: eachOrderCost[weightIndex]})))
        setIsResetBtn(true);
    }

    const addWeight = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        const validWeight = weightRef.current.value.replace(",", ".");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
        setData(prev => [...prev, { weight: validWeight }])
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setTimeout(() => weightRef.current.value = "", 100)
    }

    const removeWeight = (weight) => () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        setData(prev => prev.filter(prevItem => prevItem.weight !== weight))
    }

    const showHome = () => {
        setShow(false)
    }
    const resetAll = () => {
        setData([]);
        setIsResetBtn(false);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        generalSumm.current.value = "";
    };
    return (
        <Styled.Main>
            {/* <Styled.Title>
                <h1>Welcome, Viktor</h1>
            </Styled.Title> */}
            
            {/* <Styled.Sheet>

            </Styled.Sheet> */}
            <Styled.CardWrapper show={show.toString()}>
                <Styled.Card>
                {isResetBtn && <Styled.ResetBtn>
                        <button onClick={resetAll}>Очистити все</button>
                    </Styled.ResetBtn>}
                    {data.length > 0 && <Styled.CardList>
                        {data.map(({weight, price}, weightIndex) => 
                        <React.Fragment  key={`${weightIndex}_${weight}`}>
                            <Styled.CardListItem >
                                <p>{`${weightIndex + 1}: ${weight} гр `}</p>
                                {price && <span>{`${price} $`}</span>}
                                <button onClick={removeWeight(weight)}><MdClose /></button> 
                            </Styled.CardListItem>
                        </React.Fragment>
                        )}
                    </Styled.CardList>}
                    {/* {isResetBtn && <Styled.ResetBtn>
                        <button onClick={resetAll}>Очистити все</button>
                    </Styled.ResetBtn>} */}
                    <Styled.Input>
                        <input type='text' placeholder='Вага в грамах' ref={weightRef} inputMode="numeric" pattern="^[0-9,.-]*$" />
                        <button onClick={addWeight}>Додати</button>
                    </Styled.Input>
                    {data.length > 0 && <Styled.Input>
                        <input type='text' placeholder='Загальна сума в $' ref={generalSumm} inputMode="numeric" pattern="^[0-9,.-]*$" />
                        <button onClick={getResult}>Розрахувати</button>
                    </Styled.Input>}
                    
                </Styled.Card>
            </Styled.CardWrapper>
            <Styled.Navbar>
                <Styled.NavLink onClick={showHome}>
                    <AiOutlineHome />
                </Styled.NavLink>
                <Styled.NavLink onClick={showCalc}>
                    <MdOutlineCalculate />
                </Styled.NavLink>
            </Styled.Navbar>
        </Styled.Main>
    )
}

export default Home;