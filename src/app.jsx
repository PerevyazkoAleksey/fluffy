import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import About from './pages/About';


export default function app() {
  return (
    <BrowserRouter>
        <Navbar />
        <main className='container'>
            <Routes>
                <Route path='/' element={<Home />}>Home</Route>
                <Route path='about' element={<About />}>About</Route>
            </Routes>
        </main>
    </BrowserRouter>
  )
}
