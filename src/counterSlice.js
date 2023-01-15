import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "fdgdf", price: 34, mrp: 435 },
  { title: "fdgdf", price: 34, mrp: 435 },
  { title: "fdgdf", price: 34, mrp: 435 },
  { title: "fdgdf", price: 34, mrp: 435 },
  { title: "fdgdf", price: 34, mrp: 435 },
  { title: "fdgdf", price: 34, mrp: 435 },
];

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return (state.value += 1);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
