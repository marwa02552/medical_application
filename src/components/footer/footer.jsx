import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <div>
                    <img src={logo} alt='logo app' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About us</Link>
                    <Link to={'/'}>Delivery</Link>
                    <Link to={'/'}>Privacy policy</Link>
                </div>
                <div>
                    <h3>GET IN TOUCH</h3>
                    <Link to={'/'} >+0-000-000-000</Link>
                    <Link to={'/'}>greatstackdev@gmail.com</Link>
                </div>
            </div>
            <div className='line'></div>
            <div className='last'>
                Copyright 2024 @ Nassane marwa - All Right Reserved.
            </div>
        </div>
    )
}
