import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getDataThunk = createAsyncThunk(
  'messages/getData',
  async () => {
    const response = await fetch('http://localhost:3000/greeting_message')
      .then((response) => response.json());

    return response;
  },
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    message: 'Greeting message',
  },
  extraReducers: {
    [getDataThunk.fulfilled]: (state, { payload }) => ({
      message: payload.text,
    }),
  },
});

export default messagesSlice.reducer;
