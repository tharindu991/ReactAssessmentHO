import React, { useState } from 'react';
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch } from 'react-redux'

import './App.css';

import { setToDoList  } from './ToDoSlice'

function App() {
  const [ userInput, setUserInput ] = useState('');

  const toDoList = useSelector((state) => state.todos.toDoList)
  const dispatch = useDispatch()

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    dispatch(setToDoList(mapped));
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    dispatch(setToDoList(filtered));
  }
 
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  addTask(userInput);
  setUserInput('');

}

const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
  dispatch(setToDoList(copy));
}

const removeTask=(item)=>{
  dispatch(setToDoList(toDoList.filter((obj) => obj.id !== item.id)));

}
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} removeItem={removeTask}/>
     <div>
     <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
      <button onClick={handleSubmit}>Submit</button>
     </div>

   </div>
 );
}
 
export default App;