import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {useAuth} from './auth'
const Navbar=()=>{
  const auth=useAuth()
    return (
      <div>
        <nav className='nav1'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Donor-details</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {!auth.user && 
            <NavLink to="/login">Login</NavLink>}
            <NavLink to="/bloodmatch1">Request-for-blood</NavLink>
        </nav>
      </div>
    )
  }

export default Navbar
