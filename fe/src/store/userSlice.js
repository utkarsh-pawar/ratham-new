import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addName: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    addAge: (state, action) => {
      console.log(action.payload);
      state.age = action.payload;
    },
  },
});

export const { addName, addAge } = userSlice.actions;
// Action creators are generated for each case reducer function

export default userSlice;
