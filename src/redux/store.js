import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './features/cartslice'
export const store = configureStore({
  reducer: {
    cart : cartSlice,
  },
})