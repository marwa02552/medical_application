import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiAgenda } from "react-icons/tfi";
import { LuUsers2 } from "react-icons/lu";
import { GoPersonAdd } from "react-icons/go";
import { useLocation } from 'react-router-dom';
const style={
    backgroundColor:' #F2F3FF',
    padding:"12px 0",
    margin:'0',
    borderRight: "solid  4px  #5F6FFF",
    borderRadius:"2px"
}
export default function Sidebar() {
    const locatin = useLocation()

  return (
    <div className='sidebar'>
      <Link to={'/admin/dashboard'} style={locatin.pathname === '/admin/dashboard' ? style :{}}>
        <MdOutlineSpaceDashboard className='icon'/>
        Dashboard
      </Link>
      <Link to={'/admin/appointments'} style={locatin.pathname === '/admin/appointments' ? style :{}}>
        <TfiAgenda  className='icon'/>
      Appointments
      </Link>
      <Link to={'/admin/addDoctor'} style={locatin.pathname === '/admin/addDoctor' ? style :{}}>
        <GoPersonAdd  className='icon'/>
      Add Doctors
      </Link>
      <Link to={'/admin/doctors'} style={locatin.pathname === '/admin/doctors' ? style :{}}>
        <LuUsers2  className='icon'/>
        Doctors List
      </Link>

    </div>
  )
}
