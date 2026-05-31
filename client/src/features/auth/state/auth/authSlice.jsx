import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    employee: null,
    isLoading: false,
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },
    removeEmpoyee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },
});

export const { addEmployee, removeEmpoyee } = authSlice.actions;

export default authSlice.reducer;
