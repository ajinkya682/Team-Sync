import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../app/config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (creadentials, thunkApi) => {
    try {
      const res = await axiosInstance.post("/auth/login", creadentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
