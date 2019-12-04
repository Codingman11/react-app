import {useDispatch} from 'react-redux';
export const ADD_SYMBOL = "ADD_SYMBOL";
export const addSymbol = (xIsNext) => {
    const action = {
        type: ADD_SYMBOL,
        payload: xIsNext,
        increment: 1
    }
    
}

