import React from 'react'
import HeaderAdmin from '../../../components/admin/header/header'
import Sidebar from '../../../components/admin/sidebar/sidebar'
import './style.css'
export default function Doctors() {
    return (
        <div className='dashboard '>
            <HeaderAdmin />
            <div className='admin'>
                <Sidebar />
                <div className='content'>
                    heyyyyyyyy
                </div>
            </div>

        </div>
    )
}
