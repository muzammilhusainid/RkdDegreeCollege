import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'

import React from 'react'
import AboutPage from "./componenets/aboutPage/AboutPage";
import Staff from "./componenets/staff/Staff";
import Home from "./componenets/home/Home"
import Courses from "./componenets/courses/Courses";
import ScrollToTop from "./componenets/scrollToTop/ScrollToTop";
import { Form } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutPage" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
