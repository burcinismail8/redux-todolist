import React from "react";
import "./App.css";
import Input from "./app/components/input";
import ToDoItem from "./app/components/ToDoItem";
import { useSelector } from "react-redux";
import { selectToDoList } from "./features/toDoSlice";
function App() {
  let todoList = useSelector(selectToDoList);
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-todos">
          {todoList.map((item) => {
            return <ToDoItem name={item.item} id={item.id} done={item.done} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
