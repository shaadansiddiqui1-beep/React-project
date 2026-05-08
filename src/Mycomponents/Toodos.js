import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="row gy-4">
          {props.todos.map((todo) => (
            <div key={todo.sno} className="col-12">
              <TodoItem todo={todo} onDelete={props.onDelete} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;