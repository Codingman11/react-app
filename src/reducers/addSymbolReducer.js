import {ADD_SYMBOL} from '../actions';

const initialState = {
    board: [],
    xIsNext: true,
    moves: 0
};



const addSymbol = (state, action) => {
    switch(action.type) {
        case "ADD_SYMBOL":
            return {
                squares: [action.payload],
                moves: action.increment
            }
        default:
            return state;
    }
}

export default addSymbol;
