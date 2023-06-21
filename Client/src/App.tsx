import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Components/menu'
import Home from './Pages/Home'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Menu/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
