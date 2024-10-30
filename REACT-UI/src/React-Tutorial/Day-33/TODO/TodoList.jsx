// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './actions';

const TodoList = ({ todos }) => {
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onRemove={dispatch(removeTodo(todo.id))} onToggle={() => dispatch(toggleTodo(todo.id))} />
            ))}
        </ul>
    );
};

export default TodoList;
