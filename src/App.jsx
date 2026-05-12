import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'

import React from 'react'
import AboutPage from "./componenets/aboutPage/AboutPage";
import Staff from "./componenets/staff/Staff";
import Home from "./componenets/home/Home"
import Courses from "./componenets/courses/Courses";
import ScrollToTop from "./componenets/scrollToTop/ScrollToTop";
import { Form } from 'react-router-dom'
import AllNoticeComponent from "./componenets/allNotice/AllNoticeComponent";
import AllEventsComponent from "./componenets/event/AllEventsComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/all-notices" element={<AllNoticeComponent />} />
          <Route path="/all-events" element={<AllEventsComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
