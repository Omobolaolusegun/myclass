import React, {useState} from 'react'

const HandlingInput = () => {
    // const age = {useRef}
    const userObject = {firstname:"",lastname:"",age:"",dept:"",date:"",school:""}
    const [user, setUser] = useState(userObject)
    const [allUsers, setallUsers]= useState([])
    const [indexToEdit, setindexToEdit]= useState(null)
    const [editedObj, seteditedObj]= useState(userObject)
    // const [newUpdatedUser, setnewUpdatedUser] = useState()
        // firstname: "",
        // lastname: "",
        // age: "",
        // dept: "",
        // date: "",
        // school: ""
    // })
    // const [detailsArray, setDetailsArray] = useState([])
   
    const inputIsChange = (e)=>{
//     const {name, value} = e.target;
//    setUser({...user, [name]: value});
    if (indexToEdit == null){
        setUser({...user,[e.target.name]: e.target.value})
        console.log(user)
    } else{
        seteditedObj({...editedObj, [e.target.name]: e.target.value})
    }
    }

    const submitUser = ()=>{
        if(indexToEdit === null){
            setallUsers([...allUsers, user])
            const saveUsers = [...allUsers, user]
            setUser(userObject)
            localStorage.setItem("allUsers", JSON.stringify(saveUsers))
        } else{
            const newUsers = [...allUsers]
            allUsers[indexToEdit] = {...newUsers[indexToEdit], ...editedObj};
            setallUsers([...allUsers])
            setindexToEdit(null)
            seteditedObj(userObject)
            localStorage.setItem("allUsers", JSON.stringify(allUsers))
        }
        // const userObj = {...user}
        // console.log(userObj)
        // detailsArray.push(user)
        // setDetailsArray([...detailsArray])
        // localStorage.setItem("detailsArray", JSON.stringify(detailsArray))
        // console.log(detailsArray)
    }
    const clearMe = (i)=>{
        //  let index = i
        //  let detailsArray = [index]
        //  detailsArray.splice(i, 1)
        //  setDetailsArray([...detailsArray])
        //  localStorage.setItem("detailsArray", JSON.stringify(detailsArray))
        //  console.log(detailsArray)
        allUsers.splice(i,1)
        setallUsers([...allUsers])
        localStorage.setItem("allUsers", JSON.stringify(allUsers))
                
    }
    //   const [users, setUsers]=useState()
    // const [editindex, setEditindex]=useState(null);
    // const [editobj, seteditobj]=useState({});

    // const editItem = (editindex)=>{
    //     setEditindex(editindex)
    //     seteditobj(user,[editindex])
    // }
//    const saveChanges = ()=>{
//        let newUpdatedUser = [...users]
//        newUpdatedUser[editindex]=editobj;
//        setUsers(newUpdatedUser)
//        setUsers(users.map((each,i)=>i == editindex? editobj : each))
//    }

    const editItem= (i, e)=> {
        setindexToEdit(i)
        var mee = allUsers[i]
        seteditedObj(mee)
        console.log(editedObj) 
        console.log(editedObj)     
    }
//        const saveChanges = ()=>{
//        let newUpdatedUser = [...users]
//        newUpdatedUser[editindex]=editobj;
//        setUsers(newUpdatedUser)
//        setUsers(users.map((each,i)=>i === editindex? editobj : each))
//    }
    


    return (
        <>
        <div className="container-fluid">
            <div className="col-4 shadow rounded  m-auto mt-3 text-center p-2 m-2 bg-warning">
            <input name='firstname' placeholder='firstname' value={indexToEdit == null? user.firstname: editedObj.firstname} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="lastname" placeholder="lastname" value={indexToEdit == null? user.lastname: editedObj.lastname} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="age" placeholder="age" value={indexToEdit == null? user.age: editedObj.age} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="dept" placeholder="dept" value={indexToEdit == null? user.dept: editedObj.dept} onChange={inputIsChange} className="border rounded p-2 m-2 outline none"/>
            <input name="school" placeholder="school" value={indexToEdit == null? user.school: editedObj.school} onChange={inputIsChange} className="border rounded m-2 p-2 outline none"/>
            <input type="date" name="date" value={indexToEdit == null? user.date: editedObj.date} onChange={inputIsChange} className="border rounded m-2 p-2 outline none"/>
            <button onClick={submitUser}className="btn btn-primary w-100 mt-3">{indexToEdit === null? "Sign up": "Update"}</button>
            </div>

        </div>
        {
            allUsers.map((each, i)=>(
             <div key={i} className={`bg-light border border-green border-3 col-lg-6 m-auto mt-3 shadow rounded text-center fw-bold fs-2`}>{each.firstname} {each.lastname} {each.dept}  {each.school} {each.date} {each.age}
             <Esther clearMe={clearMe} i ={i} editItem={editItem}/>
             
            
             </div>
             
            
             
            )  
            
         )
         }
              {/* <table className="table w-50 border m-auto">
          <tr>
              <th scope="col">#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>age</th>
              <th>department</th>
              <th>Faculty</th>
              <th>date</th>
          </tr>
         </table> */}
         
           
        </>
    )
}

const Esther = ({clearMe,editItem}, {i})=>{
    return(<div>
    <button className="btn-btn warning m-auto" onClick={()=>clearMe(i)}>Delete</button>
   <button className="btn btn-success m-auto" onClick={()=>editItem(i)}>Edit</button><br/><br/>
    </div>
    )
}

export default HandlingInput
