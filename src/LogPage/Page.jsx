import React, { useState } from 'react'
import Question from '../question/Question'
import './Page.css'
export default function Page({nameExam ,name ,date, questions}) {
const [title,setTitle]=useState({
      index:"شماره سوال",
      questionText: " ",
      garde: "نمره",
})
  return (
    <div className='container-page'>
      <div className='page-top'>
        <h1>بسمی تعالی</h1>
        <div className='div-title--page'>
          <p> نام  : </p>
          <p> نام خانوادگی  : </p>
          <p>    درس  : {nameExam}</p>
          <p>   نام دبیر  : {name}</p>
          <p>   تاریخ  : {date}</p>
        </div>
      </div>
      <div className='page-buttom'>
        <div className='question-box'>
        <Question {...title} number={title.index}></Question>
        {questions.map((item , index) =>{
          return(
        <Question {...questions[index]} number={index}></Question>
          )})}

        </div>
      </div>
    </div>
  )
}
