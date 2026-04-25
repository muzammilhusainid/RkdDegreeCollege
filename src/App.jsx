import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'

import React from 'react'
import Home from './componenets/home/Home'
import { Form } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
