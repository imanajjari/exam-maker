import React from 'react'
import './Form.css'
import Input from '../Inpute/Input'

export default function Form({nameExam ,name ,date,handleChangeNameExam,handleChangeName,handleChangeDate}) {
  
  return (
    <div className='container-Form'>
        <h3>
        اطلاعات برگه را وارد کنید
        </h3>
        <div className='container-inpute'>
            <Input title='نام درس' handler={handleChangeNameExam}></Input>
            <Input title='نام استاد' handler={handleChangeName}></Input>
            <Input title='تاریخ' handler={handleChangeDate}></Input>
        </div>
    </div>
  )
}
