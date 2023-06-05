import axios from 'axios'
import React, {useState,useEffect} from 'react'


const Fetch = () => {
    const [users, setUsers] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users";
    const getData = ()=>{
    // const url = "https://https://api.github.com/users";
    axios.get(url)
    .then((res)=>{
      console.log(res);
      //   <div>No user yet</div>
      setUsers(res.data);
    }).catch((error)=>{
        console.log(error);
    })
    }
    useEffect(() => {
    //     getdata()
    //     return () => {
            
    //     }
    }, [])
    return (
      <>
      <button className="btn btn-dark" onClick={getData}>Get</button>
        <div>Welcome to my page</div>
      <div>{users.map((item, index) =>
      <div key={index}>{item.name}</div>
      )}</div>
      
        </>
    )
}

export default Fetch
