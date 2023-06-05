import React from 'react'
import {createSlice} from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'counter',
    initialState:{
        count: 0
    },
    reducers:{
        increase:(state)=>{
            state.count++
        },
        decrease:(state,action)=>{
            state.count--
        },
        increaseBy20:(state,action)=>{
            state.count--
        }
    }
})

const mySlice = createSlice({name:"ola"})
// console.log(mySlice.reducer);
export const todoProducer = mySlice.reducer

export const {increase,decrease} = todoSlice.actions



export default todoSlice
