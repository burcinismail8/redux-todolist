import React from "react";
import "./ToDoItem.css";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../../features/toDoSlice";
export default function ToDoItem(props) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(props.id));
  };
  return (
    <div className="toDoItem">
      <Checkbox
        checked={props.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "Checkbox demo" }}
      />
      <p className={props.done && "toDoItem--done"}>{props.name}</p>
    </div>
  );
}
