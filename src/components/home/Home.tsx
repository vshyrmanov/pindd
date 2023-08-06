/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, useRef } from 'react';
import * as Styled from './home.styled';
// import bg from '../../assets/1.webp'
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineCalculate } from 'react-icons/md';

const Home = () => {
    const [show, setShow] = useState(false);
    const addRef = useRef(null);

    const showCalc = () => {
        setShow(prev => !prev)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        addRef?.current?.focus()
    }

    const showHome = () => {
        setShow(false)
    }

    return (
        <Styled.Main>
            {/* <img src={bg} alt="main_bg" height={700}/> */}
            {/* <Styled.Title>
                <h1>Welcome, Viktor</h1>
            </Styled.Title> */}
            
            <Styled.Sheet>

            </Styled.Sheet>
            <Styled.CardWrapper show={show.toString()}>

                <Styled.Card>
                    <Styled.Input>
                        <input type='text' placeholder='Вага в грамах' ref={addRef} />
                        <button>Додати</button>
                    </Styled.Input>
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