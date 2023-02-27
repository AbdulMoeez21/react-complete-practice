import React from 'react'
import { Outlet } from 'react-router-dom'
const CareerLayouts = () => {
  return (
    <div >
      <h1 >Carreers</h1>
      <p>
      The Lorm alphabet is a method of tactile signing named after Hieronymus
        Lorm.
      </p>

      <Outlet />
    </div>
  )
}

export default CareerLayouts
