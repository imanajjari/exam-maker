import React from 'react'
import './Input.css'
export default function Input({title, handler}) {
  return (
    <div>
      <label className='lable' >{title}</label>
      <input type='text' className='inpute' onChange={(e)=>{
        handler(e.target.value)
      }}/>
    </div>
  )
}
