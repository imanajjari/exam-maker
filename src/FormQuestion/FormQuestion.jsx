import React from 'react';
import './FormQuestion.css';
import InputeQuestion from '../InputeQuestion/InputeQuestion';

export default function FormQuestion({handleAddQuestion, questions, handleChangeQuestion, deleteHandeler}) {
  return (
    <div>
      <button className='add-button' onClick={handleAddQuestion}>فزودن سوال</button>
      
      {questions.map((value , index) => {
        return(
          <InputeQuestion {...questions[index]} number={index} handleChangeQuestion={handleChangeQuestion} deleteHandeler={deleteHandeler}></InputeQuestion>
        )})}
      
    </div>
  )
}
