let baseUrl;
if(process.env.NODE_ENV === 'production'){

}else{
    baseUrl = 'http://localhost:4000'
}
export default baseUrl




// import axios from 'axios';
// import React, {useRef,useEffect,useState, useInsertionEffect} from 'react'
// import {useNavigate} from 'react-router-dom'
// import baseUrl from './baseUrl'

// const NewPost = () => {
//     const navigate = useNavigate
//     const title = useRef()
//     const more = useRef()
//     const dept = useRef()
//     const faculty = useRef()
//     const date = useRef()
//     const time = useRef()
    
//     const [isLoading, setisLoading] = useState(false)

//     const createPost = ()=>{
//         let form = FormData();
//         form.append('title', title.current.value);
//         form.append('more', more.current.value);
//         form.append('dept', dept.current.value);
//         form.append('faculty', faculty.current.value);
//         form.append('date', date.current.value);
//         form.append('time', time.current.value);
//         form.append('picture', picture.current.file[0])

//         setisLoading(true)
//         axios.get(baseUrl+'/new-post',form).then((res)=>{
//             console.log(res)
//             isLoading(false)
//             navigate('/get-post')
//         }).catch((err)=>{
//             console.log(err)
//             setisLoading(false)
//         }
        
//         )

//     }

//     const [posts, setPosts]= useState([]);
//     useEffect(()=>{
//         axios.get(baseUrl+"/get-posts").then((res)=>{
//             setPosts(res.data.date)
//         }).catch (err =>{
//             console.log(err);
//         })
//     })
//     return (
//         <div>
            
//         </div>
//     )
// }

