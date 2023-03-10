import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink  } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

const Reactroute = () => {
  return (
    <BrowserRouter>
    <header>
    <nav>
      <h1> Joba Router</h1>
      <Link to="/">Home</Link>
      <NavLink to="about">About</NavLink>
      </nav>
    </header>
        <main>
            <Routes>
            <Route index  element={<Home /> }/>
                <Route path="about" element={<About /> }/>
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default Reactroute
