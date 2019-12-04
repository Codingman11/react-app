export const ADD_SYMBOL = "ADD_SYMBOL";
export const addSymbol = (xIsNext) => {
    
    return {
        type: "ADD_SYMBOL",
        payload: xIsNext,
        increment: 1
    }


}