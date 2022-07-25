import { createSlice } from '@reduxjs/toolkit'

const initialState={
    origin:null,
    destination:null,
    travelTimeInfo:null,
}

export const navSlice=createSlice({
    name:'nav',
    initialState: {
        value: 0,
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