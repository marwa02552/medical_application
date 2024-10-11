import React from 'react'
import './style.css'
import doctors from '../../images/docs.png'
import ellipse1 from '../../images/ellipse2.png'
import ellipse2 from '../../images/Ellipse3.png'
import ellipse3 from '../../images/Ellipse.png'
import { IoArrowForwardOutline } from "react-icons/io5";
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import images from '../../data/images'
import Card from '../../components/card/card'
const imgs = [ellipse1, ellipse2, ellipse3]
const data=[
  {name:"Richard James",spec:"Neurologist",pic:images.doc1,id:'122'},
  {name:"Emily Larson",spec:"Gastroenterologist",pic:images.doc2,id:'55555'},
  {name:"Ryan Martinez",spec:"Gastroenterologist",pic:images.doc3,id:'777777'},
  {name:"Ryan Martinez",spec:" Dermatologist",pic:images.doc4,id:'jfjfjfj'},
  {name:" Patrick Harris",spec:"Pediatricians",pic:images.doc5,id:'jjfjfj'},
]
export default function Home() {
  return (
    <div className='container home'>
      <Header />
      <div className='welcom'>
        <div className='text'>
          <h1>Book Appointment With Trusted Doctors</h1>
          <div className='subtext'>
            <div>
              {imgs.map((e) => {
                return (
                  <img alt='subscriber' src={e} />
                )
              })}
            </div>
            <p>Simply browse through our extensive  list of trusted doctors schedule your appointment hassle-free.</p>
          </div>
          <button className='btn'>
            <div>Book oppoointment</div>
            <IoArrowForwardOutline />
          </button>
        </div>
        <div className='image'>
          <img alt='doctors' src={doctors} />
        </div>
      </div>
      <div className='cards'>
      {data.map((e)=>{
        return(
          <Card img={e.pic} name={e.name} spec={e.spec} id={e.id}/>
        )
      })
      }
      </div>
      <Footer/>
    </div>
  )
}
