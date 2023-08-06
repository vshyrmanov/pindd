import styled from 'styled-components'

export const Main = styled('div')`
    position: relative;
    height: 100vh;
    max-height: 100%;
    width: 100vw;
    max-width: 100%;
    background-image: url('https://cdn.discordapp.com/attachments/1038329663187062804/1137071193799798905/fultron84_a_diorama_of_paper_cut_outs_depicting_a_scenic_temple_7963d1c1-1ace-40bc-82ff-58e886884b7b.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Title = styled('div')`
    position: fixed;
    top: 0;
    border: 1px solid red;
    /* width: 100%; */
    padding: 0 10px;
    h1 {
        color: #eeeeee;
    }
`

export const List = styled('div')`

`
interface ICardWrapper {
    show: string;
}
export const CardWrapper = styled('div')<ICardWrapper>`
    /* border: 1px solid red; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 5px;
    position: absolute;
    top: 0;
    left: ${({show}) => show === "true" ? "0" : "-100%"};
    transition: left 300ms ease-in-out;
`

export const Card = styled('div')`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    height: 250px;
    width: 100%;
    padding: 5px;
    
`

export const Input = styled('div')`
    display: flex;
    flex-direction: row;
    input {
        all: unset;
        /* border: 1px solid red; */
        height: 45px;
        border-radius: 12px 0 0 12px;
        width: 69%;
        padding: 0 5px ;
        &[type="text"] {
            color: #212121;
            font-size: 20px;
            background-color: #eeeeee;
            background: rgba(255, 255, 255, 0.2);
        }
    }
    button {
        all: unset;
        height: 45px;
        width: 29%;
        /* border: 1px solid red; */
        border-radius: 0 12px 12px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(255,255,255,0.5);
        color: rgba(6,54,61,1);
        font-size: 20px;
    }
`

export const Sheet = styled('div')`
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 620px;
    bottom: 0;
    height: 100%;
    /* border: 1px solid red; */
    background: rgb(219,127,199);
    background: linear-gradient(180deg, rgba(219,127,199,0) 0%, rgba(6,54,61,1) 26%);
`

export const Navbar = styled('div')`
    width: 100vw;
    max-width: 100%;
    height: 45px;
    /* border: 1px solid red; */
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const NavLink = styled('button')`
    all: unset;
    height: 100%;
    svg {
        height: 40px;
        width: 40px;
        color: #eeeeee;
    }
`