import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  const response = await axios.get('http://localhost:3000/files/data')
  return response.data
})

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setFiles: (state, action) => {
      state.list = action.payload
    },
    clearFiles: (state) => {
      state.list = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { setFiles, clearFiles } = filesSlice.actions
export default filesSlice.reducer
