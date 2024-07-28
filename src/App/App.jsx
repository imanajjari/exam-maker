import React, { useState } from 'react'
import Form from '../Form/Form'
import Page from '../LogPage/Page'
import FormQuestion from '../FormQuestion/FormQuestion'
import './App.css'

export default function App() {
  //useStates
  const [nameExam, setNameExam] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [question, setQuestion] = useState([
    {
      id:0,
      questionText: "پیامبر در کجا به معراج رفت",
      garde: "2",
    },
    {
      id:1,
      questionText: "پیامبر در کجا به معراج رفت",
      garde: "2",
    },
    {
      id:2,
      questionText: "پیامبر در کجا به معراج رفت",
      garde: "2",
    },
  ]);
  //handlers
  const handleChangeNameExam = (value) => {
    setNameExam(value);
  }
  const handleChangeName = (value) => {
    setName(value);
  }
  const handleChangeDate = (value) => {
    setDate(value);
  }
  const handleAddQuestion = () => {
    const newQuestion = {
      id:question.length,
      questionText: "",
      garde: "",
    }
    setQuestion([...question,newQuestion]);
  }
  const handleChangeQuestion = (valueText, valueGarde, id) => {
      const updateDate = [ ...question ];
      question[id].garde = valueGarde;
      question[id].questionText = valueText;
      setQuestion(updateDate)
  }

  const deleteHandeler = (id) => {
    const index = question.findIndex((item) => item.id === id)
    if (id !== -1){
      const updateDate = [ ...question ];
      updateDate.splice(index, 1);
      setQuestion(updateDate)
    }
  }
  //your jsx
  return (
    <div className='container-body'>
      <div className='container-content'>
        <div>
            <h1 className='h1-title'>طراحی انلاین برگه امتحان</h1>
        </div>
        <Form 
         nameExam={nameExam}
         name={name}
         date={date}
         handleChangeNameExam={handleChangeNameExam}
         handleChangeName={handleChangeName}
         handleChangeDate={handleChangeDate}
         ></Form>
         <div className='div-add--button'>
          <FormQuestion
           handleAddQuestion={handleAddQuestion}
           questions={question}
           handleChangeQuestion={handleChangeQuestion}
           deleteHandeler={deleteHandeler}
          ></FormQuestion>
          
         </div>
        </div>
        <Page 
         nameExam={nameExam}
         name={name}
         date={date}
         questions={question}
         ></Page>
    </div>
  )
}
