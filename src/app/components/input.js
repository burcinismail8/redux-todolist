import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
import { saveToDo } from "../../features/toDoSlice";
export default function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addToDo() {
    console.log(`Adding ${input}`);
    dispatch(
      saveToDo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  }
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
    </div>
  );
}
