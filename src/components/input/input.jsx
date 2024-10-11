import React from 'react'
import './style.css'
export default function Input(props) {
  return (
    <div className='input'>
        <label>{props.text}</label>
      <input 
      type={props.type}
       placeholder={props.plc} 
       min={props.min}
       max={props.max}
       />
    </div>
  )
}
