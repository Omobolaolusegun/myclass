import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useStorage} from './useStorage'
// import React from 'react'

const CustomHook = () => {
    const [facts, setfacts] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(()=>{
        const url = 'https://cat-fact-herokuapp.com/facts'
        setisLoading(true)
        axios.get(url).then((res)=>{
            setfacts(res.data)
            setisLoading(false)
        }).catch(err =>{
            console.log(err);
            setisLoading(false)
        })
    }, [])
    const [data, setdata] = useState([])
    const {getIt, setIt} = useStorage()
    useEffect(()=>{
        if(localStorage.data){
            setdata(getIt('data'))
        }
    }, [getIt])

    const settt = ()=>{
        setIt('data', data)
    }
    return (
        <div>
            {isLoading ? "Loadging":
              facts.map((each, i)=>{
                  <div>
                      <h2>{each.text}</h2>
                  </div>
              })
            }
        </div>
    )
}

export default CustomHook
