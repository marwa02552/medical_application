import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import images from '../../data/images'
import './style.css'
export default function Contact() {
  return (
    <div className='container'>
      <Header />
      <h2 style={{color:"#4B5563",fontSize:22,fontWeight:500,textAlign:"center",marginTop:50}}>Contact us</h2>
      <div className='contact'>
        <img alt='contact' src={images.contact} />
        <div className='text'>
          <h2>Our OFFICE</h2>
          <div className='adr'>
            54709 Willms Station  <br />Suite 350, Washington, USA
          </div>
          <div className='tlph'>
            Tel: (415) 555‑0132 <br />Email: greatstackdev@gmail.com
          </div>
          <h2>Careers at PRESCRIPTO</h2>
          <p>Learn more about our teams and job openings.</p>
          <div className='box'>Explore Jobs</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
