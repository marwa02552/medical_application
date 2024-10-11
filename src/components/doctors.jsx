import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import images from '../../data/images'
import Card from '../../components/card/card'
import './style.css'
const data=[
    {name:"Richard James",spec:"Neurologist",pic:images.doc1,id:'122'},
    {name:"Emily Larson",spec:"Gastroenterologist",pic:images.doc2,id:'55555'},
    {name:"Ryan Martinez",spec:"Gastroenterologist",pic:images.doc3,id:'777777'},
    {name:"Ryan Martinez",spec:" Dermatologist",pic:images.doc4,id:'jfjfjfj'},
    {name:" Patrick Harris",spec:"Pediatricians",pic:images.doc5,id:'jjfjfj'},
  ]
export default function Doctors() {
  return (
    <div className='container doctors'>
     <Header/>
      <div className='content'>
        <div>
            filtrinhgggg
        </div>
      <div className='cards'>
      {data.map((e)=>{
        return(
          <Card img={e.pic} name={e.name} spec={e.spec} id={e.id}/>
        )
      })
      }
      </div>
      </div>
     <Footer/>
    </div>
  )
}
