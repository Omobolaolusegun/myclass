import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
// import App from '..App'
// import CbtApp from'./CbtApp'
// import {BrokenLink} from './Component/Class'
import Login from '../Component/Login'
// import home from '../Component/home'
// import UserGuard from '../guards/UserGuard'
// import Dashboard from "./Dashboard"
// import NewPost from "../Component/NewPost"
import Fetch from "../Component/Fetch"
import Navbar from "../Component/Navbar"
import Details from '../Component/Details'
import State from "../Component/State"
// import Counter from '../Component/Counter'
// import {BrokenLink} from "../Component/404"

// axios.interceptors.request.use((value)=>{
//     value.haaders={
//         'Authorization':localStorage.token
//     }
//     return value;
// })


const MainRouter = () => {
    return (
        <>
                <Router>
         <Navbar/>

                    <Routes>
                        {/* <Router path="/" element={<App/>}/> */}
                        {/* <Route path="/" element={<App/>}/>
                        <Route path="/CbtApp/:questionNumber" element={<CbtApp/>}/>    */}
                        {/* <Route path="/CbtApp/0" element={<BrokenLink/>}/>  */}
                        {/* <Route path="*" element={<BrokenLink/>}/> */}
                        {/* {<Route path="/counter" element={<Counter/>}/>} */}
                        {/* <Route path="/login" element={<Login/>}/>  */}
                        <Route path="/Fetch" element={<Fetch/>}/>
                        {/* <Route path='/Dashboard'element={<Dashboard/>}/>  */}
                        <Route path='/State'element={<State/>}/> 
                        {/* <Route path="user" element={<UserGuard/>}/> */}
                        {/* <Route path="/user" element={<UserGuard/>} children={[
                            <Route path="profile:username" element={<profile/>}/>   

                        ]}/>  */}
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/Details" element={<Details/>}/>
                        {/* <Router path="/home" element={<home/>}/> */}
                    </Routes>
                </Router>
        </>
    )
}

export default MainRouter
