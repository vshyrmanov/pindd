import styled from 'styled-components';

export const Main = styled('div')`
    border: 1px solid #bdbdbd;
    margin: 20px 0 0 0;
    width: 320px;
    padding: 10px;
    border-radius: 5px;
`

export const Form = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const List = styled('div')`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    span {
        display: flex; 
        width: 100%; 
        align-items: center;
    }
    p {
        color: #4caf50; 
        font-weight: 600;
    }
`
export const RemoveBtn = styled('button')`
    background-color: #f44336;
    border: none;
    height: 20px;
`

export const WeightForm = styled('div')`
    display: flex;
    flex-direction: column;
    input {
        all: unset;
        border-bottom: 1px solid #bdbdbd;
        margin: 10px 0;
    }
`

export const ResultForm = styled('div')`
    border: 1px solid #bdbdbd;
    margin: 20px 0 0 0;
    width: 320px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    input {
        all: unset;
        border-bottom: 1px solid #bdbdbd;
        margin: 10px 0;
    }
`
export const AddBtn = styled('button')`
        height: 45px;
        background-color: #00bcd4;
        border: none;
        color: #fff;
        margin: 10px 0;
`
export const CalculateBtn = styled('button')`
        height: 45px;
        background-color: #8bc34a;
        border: none;
        color: #fff;
        margin: 10px 0;
`

export const ResetBtn = styled('button')`
    height: 45px;
    background-color: #f44336;
    border: none;
    color: #fff;
    margin: 10px 0;
`