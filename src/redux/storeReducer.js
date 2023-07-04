import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  storeData: [],
};

export const fetchData = createAsyncThunk('weathers/fetchData', async () => {
  const requests = fetch('https://fakestoreapi.com/products')
    .then((response) => response.json());
  return requests;
});

const storeSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => ({ ...state, storeData: action.payload }));
  },
});

export default storeSlice.reducer;
