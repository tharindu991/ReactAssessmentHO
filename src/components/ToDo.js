import React from "react";

const ToDo = ({ todo, handleToggle, removeItem }) => {
  return (
    <div className="to-do-item">
      <button className="button-wrapper" onClick={() => handleToggle(todo.id)}>
        {todo.complete ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <div className={`to-do-item-text ${todo.complete ? "strike" : ""}`}>
        {todo.task}
      </div>
      <button className="button-wrapper" onClick={() => removeItem(todo)}>
        Delete
      </button>
    </div>
  );
};

export default ToDo;
