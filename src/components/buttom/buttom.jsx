import React from 'react'
import './buttom.css'
export default function Buttom(props) {
  return (
    <div >
      <button  
      className='btnC'
      onClick={props.action}
      >{props.name}</button>
    </div>
  )
}
