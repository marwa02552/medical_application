import React from 'react'
import './style.css'
import images from '../../../data/images'
import Buttom from '../../buttom/buttom'
export default function Header() {
  return (
    <div className='adminHeader'>
      <div>
         <img alt='logo' src={images.logo}/>
         <div className='adminBtn'>Admin</div>
      </div>
      <div>
        <Buttom name={"Logout"}/>
      </div>
    </div>
  )
}
