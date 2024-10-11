import React from 'react'
import AdminHeader from '../../../components/admin/header/header'
import './style.css'
import Sidebar from '../../../components/admin/sidebar/sidebar'
export default function Dashboard() {
  return (
    <div className='dashboard ' >
      <AdminHeader />
      <div className='admin'>
        <Sidebar />
        <div className='content'>

        </div>
      </div>
    </div>
  )
}
