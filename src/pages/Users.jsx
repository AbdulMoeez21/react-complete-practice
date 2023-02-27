import React from 'react'
import {Outlet, useParams } from 'react-router-dom'
const Users = () => {

const {name}=useParams() 
    return (
    <div>
      user {name} page 
      <Outlet/>
    </div>
    
  )
}

export default Users
