import React from "react";
import firebase from "../../util/firebase";
import "./Todo.css";

const Todo = ({ todo }) => {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
    console.log(todo);
  };
  const todoUpdate = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  console.log(todo);
  return (
    <div>
      <h1 className={todo.complete ? "complete" : ""}>{todo.title}</h1>

      <button onClick={deleteTodo}>delete</button>
      <button onClick={todoUpdate}> update</button>
    </div>
  );
};

export default Todo;
