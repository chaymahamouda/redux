import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './todoSlices/TodoSlice'

export const store = configureStore({
  reducer: {
    todo:todoSlice,
  },
})