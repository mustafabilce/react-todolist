import React, { useState } from "react";
import "./style.scss"
import logo from "./images/todo-illustration.svg"
import { AiOutlinePlus } from 'react-icons/ai';
import { BsCheckAll, BsCheckCircle } from 'react-icons/bs';

const data = [
  { id: 1, toDoTitle: "Shopping", success: false },
  { id: 2, toDoTitle: "Fitness", success: false },
  { id: 3, toDoTitle: "Homework", success: false },
];

export default function App() {
  const [toDoList, setToDoList] = useState(data);
  const [newTitle, setNewTitle] = useState("");

  const addTodo = (title) => {
    setToDoList([...toDoList, { id: Date.now(), toDoTitle: title, success: false }]);
    setNewTitle("");
  };

  const markCompleted = (id) => {
    setToDoList(
      toDoList.map((el) =>
        el.id === id ? { ...el, success: !el.success } : el
      )
    );
  };

  const clearCompleted = () => {
    setToDoList(toDoList.filter((item) => !item.success));
  }

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="top-img" />
    {/* <FcTodoList className="top-main-icon" /> */}
      <h1>
          To Do List
      </h1>
      <div className="todolist">
        {toDoList.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.success ? "done" : ""}
          >

            <p>
              {item.toDoTitle}
              <BsCheckCircle />
              </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => clearCompleted()}
        className="clear-completed"
      >
        <BsCheckAll />
        Clear Completed
      </button>
      <div className="search-wrapper cf">
        <input type="text" placeholder="Add to do..." value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholer="" />
        <button onClick={() => addTodo(newTitle)}>
          <AiOutlinePlus />
          </button>
      </div>
    </div>
  );
}
