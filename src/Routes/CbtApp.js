import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import question from "../Component/question"




const CbtApp = () => {
    const {questionNumber} = useParams()
    const navigate = useNavigate()
    let foundQuestion = (question.find((_, i)=> i == questionNumber -1))
    return (
        <>
           
        </>
    )
}

export default CbtApp
