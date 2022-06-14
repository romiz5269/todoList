import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get("http://localhost:8000/todolist");
  return response.data;
});
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    filterStatus: "All",
    filterColor: "All",
    todoList: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);

      try {
        const response = axios.post("http://localhost:8000/todolist", {
          ...action.payload,
        });
      } catch (err) {}
    },
    delTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      axios.delete(`http://localhost:8000/todolist/${action.payload}`);
    },
    updateTodo: (state, action) => {
      const data = action.payload;
      state.todoList = state.todoList.map((obj) => {
        if (obj.id === action.payload.id) {
          obj.title = action.payload.title;
          obj.status = action.payload.status;
          obj.color = action.payload.color;
        }
        return obj;
      });
      axios.put(`http://localhost:8000/todolist/${action.payload.id}`, {
        title: action.payload.title,
        status: action.payload.status,
        color: action.payload.color,
      });
    },
    filterByStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    filterByColor: (state, action) => {
      state.filterColor = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
    },
  },
});
export const { addTodo, delTodo, updateTodo, filterByStatus,filterByColor } =
  todoSlice.actions;
export const showTodo = (state) => state.todo.todoList;

export default todoSlice.reducer;
