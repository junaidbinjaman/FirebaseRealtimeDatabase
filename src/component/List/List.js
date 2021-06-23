import React, { useEffect, useState } from "react";
import firebase from "../../util/firebase";
import Todo from "../Todo/Todo";

const List = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todo = snapshot.val();

      const todoList = [];
      for (let id in todo) {
        todoList.push({ id, ...todo[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  console.log(todoList);

  return (
    <div>
      {todoList ? todoList.map((todo) => <Todo todo={todo}></Todo>) : ""}
    </div>
  );
};

export default List;
