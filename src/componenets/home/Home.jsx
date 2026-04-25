import React from 'react'
import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import Courses from '../courses/Courses'
import About from '../about/About'

const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <About/>
      <Courses/>
    </div>
  )
}

export default Home