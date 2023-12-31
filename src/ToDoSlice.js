import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todos",
  initialState: {
    toDoList: [
      {
        id: 1,
        task: "Give dog a bath",
        complete: true,
      },
      {
        id: 2,
        task: "Do laundry",
        complete: true,
      },
      {
        id: 3,
        task: "Vacuum floor",
        complete: false,
      },
      {
        id: 4,
        task: "Feed cat",
        complete: true,
      },
      {
        id: 5,
        task: "Change light bulbs",
        complete: false,
      },
    ],
  },
  reducers: {
    setToDoList: (state, action) => {
      state.toDoList = action.payload;
    },
  },
});

export const { setToDoList } = toDoSlice.actions;

export default toDoSlice.reducer;
