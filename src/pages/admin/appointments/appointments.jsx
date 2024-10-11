import React from 'react'
import Sidebar from '../../../components/admin/sidebar/sidebar'
import HeaderAdmin from '../../../components/admin/header/header'
import '../doctors/style.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import images from '../../../data/images';
const data = [
  {
    id: 1,
    patient: 'John Doe',
    img: images.doc1,
    department: 'Cardiology',
    age: 45,
    dateTime: '2024-10-08 09:30 AM',
    doctor: 'Dr. Smith',
    fees: '$250',

  },
  {
    id: 2,
    patient: 'Jane Roe',
    img: images.doc2,

    department: 'Neurology',
    age: 34,
    dateTime: '2024-10-08 11:00 AM',
    doctor: 'Dr. Williams',
    fees: '$300',
  },
  {
    id: 3,

    patient: 'Alex Johnson',
    img: images.doc2,

    department: 'Orthopedics',
    age: 29,
    dateTime: '2024-10-08 01:00 PM',
    doctor: 'Dr. Patel',
    fees: '$180',
  },
  {
    id: 4,
    patient: 'Emily Clark',
    img: images.doc3,

    department: 'Dermatology',
    age: 42,
    dateTime: '2024-10-08 02:45 PM',
    doctor: 'Dr. Hernandez',
    fees: '$220',
  },
  {
    id: 1,
    patient: 'John Doe',
    img: images.doc1,
    department: 'Cardiology',
    age: 45,
    dateTime: '2024-10-08 09:30 AM',
    doctor: 'Dr. Smith',
    fees: '$250',

  },
  {
    id: 2,
    patient: 'Jane Roe',
    img: images.doc2,

    department: 'Neurology',
    age: 34,
    dateTime: '2024-10-08 11:00 AM',
    doctor: 'Dr. Williams',
    fees: '$300',
  },
  {
    id: 3,

    patient: 'Alex Johnson',
    img: images.doc2,

    department: 'Orthopedics',
    age: 29,
    dateTime: '2024-10-08 01:00 PM',
    doctor: 'Dr. Patel',
    fees: '$180',
  },
  {
    id: 4,
    patient: 'Emily Clark',
    img: images.doc3,

    department: 'Dermatology',
    age: 42,
    dateTime: '2024-10-08 02:45 PM',
    doctor: 'Dr. Hernandez',
    fees: '$220',
  },
  {
    id: 1,
    patient: 'John Doe',
    img: images.doc1,
    department: 'Cardiology',
    age: 45,
    dateTime: '2024-10-08 09:30 AM',
    doctor: 'Dr. Smith',
    fees: '$250',

  },
  {
    id: 2,
    patient: 'Jane Roe',
    img: images.doc2,

    department: 'Neurology',
    age: 34,
    dateTime: '2024-10-08 11:00 AM',
    doctor: 'Dr. Williams',
    fees: '$300',
  },
  {
    id: 3,

    patient: 'Alex Johnson',
    img: images.doc2,

    department: 'Orthopedics',
    age: 29,
    dateTime: '2024-10-08 01:00 PM',
    doctor: 'Dr. Patel',
    fees: '$180',
  },
  {
    id: 4,
    patient: 'Emily Clark',
    img: images.doc3,

    department: 'Dermatology',
    age: 42,
    dateTime: '2024-10-08 02:45 PM',
    doctor: 'Dr. Hernandez',
    fees: '$220',
  }
]

export default function Appointments() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const newData = data.map((item, index) => ({
      ...item,
      id: index + 1, // Auto-increment the 'id' field based on index
    }));
    setTableData(newData);
  }, []);

  const patientByname = (rowData) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img alt='user' src={rowData.img} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <span>{rowData.doctor}</span>
      </div>
    )
  }
  const icon = () => {
    return (
      <i className="pi pi-times" style={{ color: 'red', border:" 1px solid #ffa27f", backgroundColor: '#FFCFB3', borderRadius: '50%', padding: 10 }}></i>
    )
  }
  return (
    <div className='dashboard '>
      <HeaderAdmin />
      <div className='admin'>
        <Sidebar />
        <div className='content'>
          <h3>All Appointments</h3>
          <div>
            <DataTable value={tableData} tableStyle={{ minWidth: '60rem' }} scrollable scrollHeight="450px" >
              <Column field="id" header="id" ></Column>
              <Column field='patient' header="Patient"></Column>
              <Column field="department" header="Department"></Column>
              <Column field="age" header="Age"></Column>
              <Column field="dateTime" header="Date & Time"></Column>
              <Column header="doctor" body={patientByname}></Column>
              <Column field="fees" header="Fees"></Column>
              <Column body={icon}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  )
}
