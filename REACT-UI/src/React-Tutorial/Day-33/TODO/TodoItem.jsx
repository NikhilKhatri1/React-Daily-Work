// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => {
    return (
        <li style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
            <span
                onClick={onToggle}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    flex: 1,
                }}
            >
                {todo.text}
            </span>
            <button onClick={onRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;
