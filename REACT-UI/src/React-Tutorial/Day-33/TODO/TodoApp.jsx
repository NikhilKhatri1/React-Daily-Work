// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './TodoList';

const TodoApp = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <TodoList todos={todos} />
        </div>
    );
};

export default TodoApp;
    