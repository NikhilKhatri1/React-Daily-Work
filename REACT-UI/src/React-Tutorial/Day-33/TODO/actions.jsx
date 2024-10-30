// actions.js
let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
});

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id,
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id,
});
