import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    initialState:{
        firstname: "Esther",
        lastname: "",
        email: ""
    },
    name: "profile",
    reducers: {
        setProfile: (state, {payload})=>{
            state = {...state, ...payload}
            return state

        }
    }
})

export const userReducer = userSlice.reducer;
export const {setProfile} = userSlice.actions