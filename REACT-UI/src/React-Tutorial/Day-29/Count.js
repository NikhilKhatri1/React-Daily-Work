export const initialState = 0;

export const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "incrementbyAmount":
            return state + action.payload;
        case "decrementbyAmount":
            return state - action.payload;
        default:
            return state;
    }
}