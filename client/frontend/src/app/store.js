import { configureStore } from '@reduxjs/toolkit'
import filesReducer from '../features/files/filesSlice'

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
})