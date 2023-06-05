import {createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice ({
    initialState: {
        count: 0,
        firstname: "esther",
        lastname: "olusegun"
    },
    name: "counter",
    reducers: {
        increase: (state)=>{
            state= {count: state.count+1}
            return state
            
        },
        increaseByAmount: (state, {payload})=>{

            state = {count: state.count + payload} 
            return state
        }
    }
})
export const counterReducer = counterSlice.reducer
export const {increase,increaseByAmount} = counterSlice.actions