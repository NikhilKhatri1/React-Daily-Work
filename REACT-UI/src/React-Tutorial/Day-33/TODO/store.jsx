// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    todos: [],
};

// Reducer function
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: action.id, text: action.text, completed: false }],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(todoReducer);

export default store;
