import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveToDo, setCheck } = toDoSlice.actions;
export const selectToDoList = (state) => state.todos.todoList;
export default toDoSlice.reducer;
