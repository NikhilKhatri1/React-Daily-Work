import { useReducer } from "react";

const initialState = {
    firstCount: 0,
    // Scenerio two
    secondCount: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return { ...state, firstCount: state.firstCount + action.value };
        case 'Decrement':
            return { ...state, firstCount: state.firstCount - action.value };
        // scenerio two
        case 'Increment2':
            return { ...state, secondCount: state.secondCount + action.value }

        case 'Decrement2':
            return { ...state, secondCount: state.secondCount - action.value }

        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

export function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count - {count.firstCount} </h1>
            <h1>Second Count- {count.secondCount} </h1>
            <button className="btn btn-primary me-2" onClick={() => dispatch({ type: 'Increment', value: 1 })}>Increment by 1</button>
            <button className="btn btn-primary me-2" onClick={() => dispatch({ type: 'Decrement', value: 1 })}>Decrement by 1</button>
            <button className="btn btn-primary me-2" onClick={() => dispatch({ type: 'Increment', value: 5 })}>Increment by 5</button>
            <button className="btn btn-primary me-2" onClick={() => dispatch({ type: 'Decrement', value: 5 })}>Decrement by 5</button>
            <div>
                <button className="btn btn-danger me-2 my-2" onClick={() => dispatch({ type: 'Increment2', value: 1 })}>Increment2 by 1</button>
                <button className="btn btn-danger me-2 my-2" onClick={() => dispatch({ type: 'Decrement2', value: 1 })}>Decrement2 by 1</button>
            </div>
            <button className="btn btn-warning me-2" onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
        </div>
    )
}