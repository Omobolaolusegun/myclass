import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increaseByAmount} from '../Slice/counterSlice'
import {setprofile} from "../Slice/profileSlice"


const Dashboard = () => {
    const {profile} = useSelector(state=> state)
    const [user, setUser] = useState(profile)
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.value
        setUser({...user, [name]: value});
    }
    const dispatch = useDispatch()
    // console.log(state);
    const update = ()=>{
        dispatch(setprofile(user))
    }
    const click = ()=>{
        dispatch(increaseByAmount(100))
    }
    // console.log(state);
    return (
        <>
         <div>User Dashboard <button onClick={click}>Inc</button></div> 
         <div className="container shadow p-2">
             <h3>Edit</h3>
             <input type="text" value={user.firstname} name='firstname' onChange={handleChange} className='form-control my-2'/>
             <input type="text" value={user.lastname} name='lastname' onChange={handleChange} className='form-control my-2'/>
             <input type="text" value={user.email} name='email' onChange={handleChange} className='form-control my-2'/>
             <button className='btn btn-outline-info' onClick={update}>Update</button>
             </div>  
        </>
    )
}

export default Dashboard
