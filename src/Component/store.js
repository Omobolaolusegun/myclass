import {configureStore} from "@reduxjs/toolkit"
import {counterReducer } from "../Slice/createSlice"
import {userReducer} from "../Slice/userSlice";


const store = configureStore ({
    reducer: {
        counter: counterReducer,
        profile: userReducer
    }
})
export default store

