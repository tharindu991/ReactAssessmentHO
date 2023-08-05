import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList, handleToggle, handleFilter,removeItem}) => {
    return (
        <div>
            <text>{'Total number of tasks remaining: ' + toDoList.filter((obj) => !obj.complete).length}</text>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} removeItem={removeItem}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
 };
 
export default ToDoList;