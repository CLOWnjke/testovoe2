import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    details: [],
    loading: true,
    error: false,
    error2: false
};

export const dataThunk = createAsyncThunk('data/dataThunk', async () => {
    const response = await fetch('http://localhost:7070/api/services')
    const res = await response.json();
    return res
})

export const detailsThunk = createAsyncThunk('data/detailsThunk', async (id) => {
  const response = await fetch(`http://locahost:7070/api/services/:${id}`)
  const res = await response.json();
  return res
})


const listSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(dataThunk.pending, (state) => {
      state.loading = true;
      state.error = false
    });
    builder.addCase(dataThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false
    });
    builder.addCase(dataThunk.rejected, (state) => {
      state.loading = true;
      state.error = true
    });
    builder.addCase(detailsThunk.pending, (state) => {
      state.loading = true;
      state.error = false
    });
    builder.addCase(detailsThunk.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loading = false;
      state.error = false
    });
    builder.addCase(detailsThunk.rejected, (state) => {
      state.loading = true;
      state.error = true 
    });
  },
});

export default listSlice.reducer;
