import { createSlice } from '@reduxjs/toolkit'

export const navSlice=createSlice({
    name:'nav',
    initialState: {
        origin:null,
        destination:null,
        travelTimeInfo:null,
      },
      reducers: {
        increment: (state) => {
          state.value += 1
        },
        decrement: (state) => {
          state.value -= 1
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload
        },
      },
})

export const { increment, decrement, incrementByAmount } = navSlice.actions

export default navSlice.reducer