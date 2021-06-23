import React, { useState } from 'react';
import firebase from '../../util/firebase';


const Form = () => {

  const [title, setTitle] = useState('')

  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const createToDo = ()=> {
    const todoRef = firebase.database().ref('Todo')
    const todo = {
      title, 
      complete: false
    }
    todoRef.push(todo)
  }
  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createToDo}> Add To Do</button>
    </div>
  );
};

export default Form;