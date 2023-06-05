import React, {useState} from 'react'

const Bndout = () => {
    const [detailsArray, setDetailsArray] = useState([])
    const [page, setPage] = useState ({
        firstname: "",
        lastname: "",
        age: ""
    })
    const input = (e)=>{
        const {name, value} = e.target;
       setPage({...user, [name]: value});
        }
    const inputs = (e)=>{
        const {name, value} = e.target;
       setPage({...user, [name]: value});
        }

        const Push = ()=>{
        const userObj = {firstname,lastname}
        console.log(userObj)
        detailsArray.push(userObj)
        setDetailsArray([...detailsArray,userObj])
        console.log(detailsArray);

        }
    
    return (
        <>
            <input name={firstname} value={page.firstname} onChange={input}
            className="border rounded p-2 m-2 outline-none"/>
            <input name={lastname} value={page.lastname} onChange={inputs}
            className="border rounded p-2 m-2 outline-none"/>
            <button onClick={Push}>submit</button>

            {
                detailsArray.map((each,i)=>{
                    <span key={i}>{each.firstname}{each.lastname}</span>
                })
            }
            
        </>
    )
}

export default Bndout
