import React, {useState, useRef} from 'react'

const Details = () => {
    const age = useRef(null)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    // const [user, setUser] = []
    const [detailsArray, setDetailsArray] = useState([])

    const input = (e)=>{
        setFirstname(e.target.value)
    }
    const inputs = (e)=>{
        setLastname(e.target.value)
    }

    // const Register = ()=>{
    //     console.log(age.current.value);
    //     const user= {firstname,lastname, [age]:""}
    //     user([...users,user])
    // }
    const register = ()=>{
        const userObj = {firstname,lastname}
        console.log(userObj)
        detailsArray.push(userObj)
        setDetailsArray([...detailsArray,userObj])
        console.log(detailsArray)
        
       
         
           
     
    }
    return (
        
        <>
        
        {/* <div className="col-6 m-auto bg-light shadow p-5"> */}
         <input value={firstname} onChange={input} className="border rounded p-2 m-2 outline none"/>
           <input value={lastname} onChange={inputs} className="border rounded p-2 m-2 outline green"/>
           {/* <input placeholder="age" ref={age} onChange={inputs} className="border rounded p-2 m-2 outline green"/> */}
           <button className="bg-red-400 text-white p-2 m-2 mx-auto mt-5 mb-4 " onClick={register}>Register</button>
           {
            detailsArray.map((each, i)=>(
             <span key={i}>{each.firstname}{each.lastname}</span>
             
            )
           
           
         )
         }
           
       
    
         
        </>
    )
}

export default Details
