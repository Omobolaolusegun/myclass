import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const state = useSelector((state)=>state.profile)
    console.log(state);
    return(
        <>
            <nav className="d-flex justify-content-end gap-2 p-2">
            <Link to="/login">Login</Link>
            <Link to="/">Home</Link> 
               <Link to="/firstname">Esther</Link> <span>{state.firstname}</span>
               
                    {/* <a href="#" className="text-decoration-none">Gmail</a>
                    <a href="#" className="text-decoration-none">Images</a>
                    <a href="#" className="text-decoration-none">Gmail</a> */}
            </nav>
            
        </>
    )
    
}
export default Navbar