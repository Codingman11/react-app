export const ADD_SYMBOL = "ADD_SYMBOL";


export const addSymbol = (setSymbol) => dispatch => {
    const action = {
        type: ADD_SYMBOL,
        payload: setSymbol,
        increment: 1
    }
    dispatch(action);
}

