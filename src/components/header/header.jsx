import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { TbMenuDeep } from "react-icons/tb";
import './header.css'
import { CiCircleRemove } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const toggelMenu = () => {
    setShowMenu(!showMenu)
  }
  const style = {
    textDecoration: 'underline',
    textDecorationColor: '#5F6FFF',
    textUnderlineOffset: '5px',
    textDecorationThickness: '3px',

  }
  const locatin = useLocation()
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <img alt='logo' src={logo} />
        </div>
        <div className='menuIcon' onClick={toggelMenu}>
          <TbMenuDeep />
        </div>
        <div className='menu'>
          <Link to={'/'} style={locatin.pathname === '/' ? style : {}}>HOME</Link>
          <Link
            to={'/doctors'}
            style={locatin.pathname.startsWith('/doctors') ? style : {}}>
            ALL DOCTORS
          </Link>
          <Link to={'/about'} style={locatin.pathname === '/about' ? style : {}}>ABOUT</Link>
          <Link to={'/contact'} style={locatin.pathname === '/contact' ? style : {}}>CONTACT</Link>
          <Link to={'/'}>Admin panel</Link>
        </div>
        <div>
          <Link to={'/'}>Create account</Link>
        </div>

      </div>

      {
        showMenu &&
        <div className='phonemenu'>
          <div>
            <img alt='logo' src={logo} />
            <CiCircleRemove onClick={toggelMenu} style={{ fontSize: 40 }} />
          </div>
          <div >
            <Link to={'/'}>HOME</Link>
            <Link to={'/'}>ALL DOCTORS</Link>
            <Link to={'/'}>ABOUT</Link>
            <Link to={'/'}>CONTACT</Link>
            <Link to={'/'}>Admin panel</Link>
            <Link to={'/'}>Create account</Link>

          </div>
        </div>
      }
    </div>

  )
}
