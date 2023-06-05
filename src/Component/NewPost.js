import axios from 'axios';
import React, {useRef,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import baseUrl from './baseUrl'


const NewPost = () => {
    const navigate = useNavigate
    const title = useRef();
    const more = useRef ();
    const picture = useRef()
    const [isLoading, setisLoading] = useState(false)
    
    const submitForm = ()=>{
        let form = new FormData();
        form.append("title", title.current.value);
        form.append("more", more.current.value);
        form.append('picture', picture.current.files[0])
    
    // useEffect(()=>{
    //     setisLoading(true)
    //     axios.get('http://localhost:4000')
    //     .then((res)=>{
    //        console.log(res.data.data);
    //        setisLoading(null) 
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setisLoading(null)
    //     })
    // }, [])
    
    // const [state, setState] = useState([])
    // // const [info, setInfo] = useState()
    // const postDetails = ()=>{
    //     const postDetails = {
    //        title: title.current.value,
    //        more: more.current.value
               
    //     }
    //     setisLoading(true)
    //     axios
    //     .post('http://localhost:4000', postDetails)
    //     .then((res)=>{
    //         console.log(res);
    //         setState(res.data.status.title.more)        
    //         setisLoading(null)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setisLoading(null)
    //     })
    //     setisLoading(true)
    //     title.current.value=''
    //     more.current.value=''
    // }
        // console.log(title);
        // const data = {
        //     title: title.current.value,
        //     more: more.current.value,
        //     picture:picture.current.files[0]
        // }

       
        setisLoading(true)
        const url = "http://localhost:4000/new-post"
        axios.get(baseUrl+'/new-post',form).then(res=>{
         console.log(res);
         setisLoading(false)
         navigate('/get-post')
        }).catch(err=>{
        console.log(err);
        setisLoading(false)
        })
    }
    //     const [posts, setPosts]= useState([]);
    // useEffect(()=>{
    //     axios.get(baseUrl+"/all-post").then((res)=>{
    //         setPosts(res.data.date)
    //     }).catch (err =>{
    //         console.log(err);
    //     })
    // })
   
    



    // setIsLoading(false)
    // useEffect = ()=>{
    //     const url = "http://localhost:4000/get-post"
    //     axios.get(url).then((res)=>{
    //         console.log(res.status.title.more)
    //         setInfo(res.data.status.title.more)        
    //     })
    // }


//     const [post, usePost]= useState({title,more})
//    const handleChange = (e)=>{
//    const value = e.target.value
//    const name = e.target.value


//    }
return (   
    <>
     <input ref={title} name='title'placeholder='title' className="border rounded p-2 m-2 outline none"/>
     <textarea ref={more} name='more' placeholder='more'  className="form-control m-2 p-2"></textarea>
     <input type="file" className='form-control border rounded p-2 m-2 outline none' name='picture' ref={picture} placeholder='file'/>
       <button disabled={isLoading} className="bg-red-400 text-white p-2 m-2 mx-auto mt-5 mb-4 " onClick={submitForm}>{isLoading?'saving 0 ...':'Submit'}</button>
       {/* <input onClick={createPost} classNamemt-2 w-50 p-2 rounded mb-4 form-control type="text"/> */}

       {/* {
           post.map((each,i)=>{
               <div>
                   {each.imagePath}
                   <img src="{`${baseUrl}/postimages/${each.image}`}" alt="postimage"/>
               </div>
           })
       } */}
       {/* {
        post.map((each, i)=>( */}
         
        {/* //  <span key={i}>{each.title}{each.more}{each.picture}</span>
         
        // )
       
       
    //  )
    //  } */}
    </>
       
   

     
)
}
//     return (
//         <div className="shadow m-3 p-3 bg-info">
//             <input ref={title} className="form-control m-2"/>
//             <textarea ref={more} className="form-control m-2"></textarea>
//             <button onClick={submitForm} className="btn btn-primary w-75">Submit</button>
//         </div>

// {
//     detailsArray.map((each, i)=>(
//      <span key={i}>{each.firstname}{each.lastname}</span>
     
//     )
   
   
//  )
//  }
//     )
// }


 

export default NewPost
