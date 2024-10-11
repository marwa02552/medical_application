import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import images from '../../data/images'
import './style.css'
const data=[
  {titel:"Efficiency",p:"Streamlined appointment scheduling that fits into your busy lifestyle."},
  {titel:"Convenience",p:"Access to a network of trusted healthcare professionals in your area."},
  {titel:"Personalization",p:"Tailored recommendations and reminders to help you stay on top of your health."},

]
export default function About() {
  return (
    <div className='container aboutPage'>
      <Header />
      <h2 style={{fontSize:24,color:"#1F2937",marginBottom:20,marginTop:40,textAlign:"center"}}>About Us</h2>
      <div className='about'>
        <img alt='about' src={images.about} />
        <div className='text'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h2>Our Vision</h2>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <h2 style={{fontSize:22,color:"#1F2937",marginBottom:20}}>Why Choose Us</h2>
      <div className='choseUs'>
        {data.map((d)=>{
        return(
          <div>
          <h2>{d.titel}</h2>
          <p>{d.p}</p>
        </div>
        )
          
        })}
      </div>
      <Footer />
    </div>
  )
}
