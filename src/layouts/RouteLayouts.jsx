import {NavLink, Outlet } from 'react-router-dom'

const RouteLayouts = () => {
  return (
    <>
       <header>
         <nav>
           <h1> Joba Router</h1>
           <NavLink to="/">Home</NavLink>
           <NavLink to="about">About</NavLink>
         </nav>
       </header>

       <main>
        <Outlet/>
       </main>
       </>
    
  )
}

export default RouteLayouts
