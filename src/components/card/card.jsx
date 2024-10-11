import React from 'react'
import './style.css'
import { FaCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
   <Link to={`/doctors/detail/${props.id}`} style={{textDecoration:'none'}}>
    <div className='docCard'>
      <img alt='doctor' src={props.img}/>
       <div className='text'>
        <div>
          <FaCircle style={{color:'#0FBF00',fontSize:10}}/>
           <span> Available</span>
        </div>
       <p style={{color:'#1F2937',fontSize:18,fontWeight:'bold'}}> Dr. {props.name}</p>
      <p >{props.spec}</p>
       </div>
    </div>
   </Link>
  )
}
