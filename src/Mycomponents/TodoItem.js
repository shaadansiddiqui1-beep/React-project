import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card todo-card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-start justify-content-between mb-3">
          <div>
            <h5 className="card-title mb-1">{todo.title}</h5>
            <p className="text-muted mb-0">Task #{todo.sno}</p>
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(todo)}
          >
            Delete
          </button>
        </div>
        <p className="card-text text-secondary">{todo.desc}</p>
      </div>
    </div>
  );
};

export default TodoItem;