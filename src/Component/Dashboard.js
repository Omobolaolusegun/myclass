import React from 'react'
import {increase,increaseByAmount} from '../Slice/counterSlice'
import {useSelector,useState,useDispatch} from 'react-redux'

const Dashboard = () => {
    const state = useSelector ((state => state.counter));
    const {counter,profile} = useSelector((state)=> state)
    const [User, setUser] = useState(profile)
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setUser({...User,[name]:value});
    }
    const dispatch = useDispatch();
    const update = ()=>{
        dispatch(setprofile(User))
    }
    const click = ()=>{
        dispatch(increaseByAmount(100))
    }
    console.log(state)
    return (
        
        <div>
            <div className="container shadow p-2">
                <h3>Edit</h3>
                <input type="text" value={User.firstname} name='firstname' onChange={handleChange} className="form-control my-2"/>
                <input type="text" value={User.lastname} name='lastname' onChange={handleChange} className="form-control my-2"/>
                <input type="text" value={User.email} name='email' onChange={handleChange} className="form-control my-2"/>
                <button className="btn btn-outline-info" onClick={update}>Update</button>
            User Dashboard {state.count} <button onClick={click}className="border rounded p-1 bg-blue-300">Inc</button>

            </div>
 
         </div>
    )
}

export default Dashboard
