import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSuggestions = createAsyncThunk('user/fetchUser', async id => {
  try {
    const response = await axios.get(`/api/${id}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
