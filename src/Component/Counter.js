import React from 'react'
import {increase,decrease} from "../redux/todoSlice"
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch()
    const {counterReducer:{count}} = useSelector((state)=>state)
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn' onClick={()=>dispatch(increase())}>Increase</button>
            <button className='btn' onClick={()=>dispatch(decrease())}>decrease</button>
        </div>
    )
}

export default Counter
