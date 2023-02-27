import React from 'react'
import { Outlet } from 'react-router-dom'

  
const UserLayouts = () => {
   
  return (
    <div >
      <h1>User</h1>
      <p>
      The Lorm alphabet is a method of tactile signing named after Hieronymus
        Lorm.
      </p>

      <Outlet />
    </div>
  )
}

export default UserLayouts