import { createSlice } from "@reduxjs/toolkit";

export const CounterState = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = CounterState.actions;

export default CounterState.reducer
