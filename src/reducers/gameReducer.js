import {ADD_SYMBOL} from '../actions';

const initialState = {
    sqares: [],
    playerTurn: true,
    moves: 0
}

const game = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_SYMBOL":
            return {
                ...state,
                squares: [action.payload],
                moves: action.increment
            }

        default:
            return state;
    }
}

export default game;