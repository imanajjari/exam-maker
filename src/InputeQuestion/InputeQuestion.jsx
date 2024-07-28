import React from 'react'
import './InputeQuestion.css'
export default function InputeQuestion({questionText, garde, number, handleChangeQuestion , deleteHandeler}) {
  
  return (
    <div className='container-inpute--question'>
        <p>
            سوال{number+1}
        </p>
        <input type='text' className='input-questions' placeholder="صورت سوال را طرح کنید" value={questionText} onChange={(e) =>{
          handleChangeQuestion(e.target.value,garde,number)
        }}></input>
        <input type='text' className='input-garde' placeholder="نمره این سوال را وارد کیند" value={garde} onChange={(e) =>{
          handleChangeQuestion(questionText,e.target.value,number)
        }}></input>
        <button className='delete-buttom'  onClick={(e)=>{
          deleteHandeler(number)
        }}>حذف سوال</button>
    </div>
  )
}
