import React, {useState} from 'react'

const State = ()=>{
    const [currentState, setCurrentState] = useState("Esther")
    const [count, setCount] = useState(0)

    const button = (something)=>{
        console.log('Hello world am esther by name')
        console.log(something)
        console.log(currentState)
    }
    const input = (e)=>{
        setCurrentState(e.target.value);
    }
    const increase = ()=>{
        setCount(count +1)
    }

    const decrease = ()=>{
        count > 0 && setCount(count -1)
    }
    const restart = ()=>{
        setCount(0)
    }
    return (
        <div className="text-center">
            <input value={currentState} onChange={input} className="border rounded p-2 m-2 outline none"/>
            <button className="bg-red-400 text-white p-2 m-2 " onClick={()=>button('hedueguyfiwqioqj')}>Button</button>
            <b>{count}</b>
            <button className="bg-green-400 m-2 p-2 text-white rounded" onClick={increase}>Increase</button>
            <button className="bg-green-400 m-2 p-2 text-white rounded" onClick={decrease}>Decrease</button>
            <button className="bg-green-400 m-2 p-2 text-white rounded" onClick={restart}>Restate</button>

        </div>
    )
}
// const State = () => {
// const Click = ()=>{
//         console.log("Hello")
//     const [currentState, setCurrentState]= useState("Esther")
//     const [count, setCount] = useState(0)

//     const button = (something)=>{
//         console.log('Hello world am esther by name')
//         console.log(something);
//         console.log(currentState)
//     }
//     const input = (e)=>{
//      setCurrentState(e.target.value);
//     }

//     const increase = ()=>{
//         setCount(count +1)
//     }
    
//     const decrease = ()=>{
//        count > 0 && setCount(count -1)
//     }
//     const restart = ()=>{
//         setCount(0)
//     }

    // }
 

    
    


export default State
