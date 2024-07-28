import React from 'react'
import './Question.css'

export default function Question({questionText,garde,number}) {
  return (
    <div className='box-question'>
        <div className='box-number'>
            <p className='question-p'> {number=="شماره سوال"?number: ` سوال ${number+1}`  } </p>
        </div>
        <div className='box-questionText'>
            <p>{questionText}</p>
        </div>
        <div className='box-garde'>
            <p>{garde}</p>
        </div>
    </div>
  )
}
