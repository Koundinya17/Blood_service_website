import React, { Component } from 'react'
import Hello from './project'
import { Layout1 } from './Parent1'
import './Main.css'
import Task1 from './task1'
import { useNavigate } from 'react-router-dom'
const Home=()=>{
  const navigate=useNavigate()
    return (
      <div className='class'>
        <div className='class'>
        {/* <h1>Home page</h1>
        <button onClick={()=>navigate("order",{replace:true})}>Order Now</button> */}
        <Hello/>
        
      <div className='class'>
        {/* <br></br> */}
      <Layout1/>
      <br></br>
      <br></br>
      <br></br>
      <Task1/>
      </div>
      </div>
      
      </div>
    )
}

export default Home
