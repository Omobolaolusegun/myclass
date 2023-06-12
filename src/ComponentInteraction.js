import React, {useState, useEffect} from 'react'

const ComponentInteraction = () => {
    const [count, setCount] = useState(0)
    const increase = ()=>{
        setCount(count +1)
    }
    const decrease = ()=>{
        count > 0 && setCount(count -1)
    }
    const restart = ()=>{
        setCount(0);
    }

    const changeName = ()=>{
        setCount=({...count,name:"Peace"})
    }


    const firstname = "Esther";
    const user = {
        name: "Esther Olusegun",
        department: "Software Engineering",
        school: "Soft Quest Incoporated",
        state: "Oyo State"
    }
    const log = ()=>{
        console.log("I'm a function, my function is to log")
    }
    useEffect(()=>{
        console.log("useEffect is working")
    }, [count]);
    return (
        <div>
           <Child1 firstname = {firstname} lastname = "Olusegun"/> 
           <Child2 log={log} user={user} increase={increase} decrease={decrease} count={count} setCount={setCount} restart={restart} changeName={changeName} />
        </div>
    )
}

const Child1 = ({firstname,lastname})=>{
    return (
        <div>
            i'am a first child, my name is {firstname} {lastname} 
        </div>
    )
}
const Child2 = ({user,log,increase,decrease,restart,changeName,count})=>{
    return (
        <>
            i'am a first child, my name is {user.name} am attending {user.school} and am from {user.department} department,{user.state}
         <button onClick={log} className="bg-info">i will call on a function of parent</button><br/>
         <div>{count}</div>
         {/* <button onClick={()=> setCount(count + 1)}className="bg-danger m-2 p-2 shadow m-auto" >Increase</button> */}
         <button onClick={increase}className="bg-danger m-2 p-2 shadow m-auto" >Increase</button>
         <button className="bg-warning m-2 p-2 shadow m-auto mx-3" onClick={decrease}>Decrease</button>
         <button className="bg-warning m-2 p-2 shadow m-auto mx-3" onClick={restart}>Restart</button>
         <button className="bg-warning m-2 p-2 shadow m-auto mx-3" onClick={changeName}>changeName</button>
         
        </>
    )
}


export default ComponentInteraction
