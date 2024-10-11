import React from 'react'
import './style.css'
export default function Select(props) {
  return (
    <div className='input'>
      <label>{props.text}</label>
      <select name={props.name}>
      {props.item && props.item.map((e) => (
          <option key={e} value={e}>{e} Year</option>
        ))}

      </select>
    </div>
  )
}
