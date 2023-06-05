import React, {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router'
import {setProfile} from '../Slice/userSlice'

const Edit = () => {
    let {profile} = useSelector(state=>state)
    const [User, setUser] = useState(profile)

    const handleChange = (e)=>{
    const inputName = e.target.name
    const value = e.target.value
    setUser({...Info, [inputName]: value})
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const update = ()=>{
        dispatch(setProfile(User))
        navigate(`/user/profile/${User.firstname}`)
    }
    return (
        <div>
              <div className="container shadow p-2">
             <h3>Edit</h3>
             <input type="text" value={user.firstname} name='firstname' onChange={handleChange} className='form-control my-2'/>
             <input type="text" value={user.lastname} name='lastname' onChange={handleChange} className='form-control my-2'/>
             <input type="text" value={user.email} name='email' onChange={handleChange} className='form-control my-2'/>
             <button className='btn btn-outline-info' onClick={update}>Update</button>
             </div>  
        </div>
    )
}

export default Edit
