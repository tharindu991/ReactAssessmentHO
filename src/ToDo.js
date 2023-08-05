import React from 'react';
 
const ToDo = ({todo,handleToggle,removeItem}) => {
    return (
        <div className='todoItem'>
                    <button className='buttonWrapper' onClick={()=> handleToggle(todo.id)}>{todo.complete ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
 <div className={ `todoItemText ${todo.complete ? "strike" : ""}`}>
            {todo.task}
        </div>
        <button className='buttonWrapper' onClick={()=>removeItem(todo)}>Delete</button>
        </div>
       
    );
 };
 
export default ToDo;