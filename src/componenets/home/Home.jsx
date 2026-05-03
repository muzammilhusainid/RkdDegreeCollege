import React from 'react'
import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import Courses from '../courses/Courses'
import About from '../about/About'
import Staff from '../staff/Staff'
import Counter from '../counter/Counter'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <About/>
      <Courses/>
      <Staff/>
      <Counter/>
      <Footer/>
    </div>
  )
}

export default Home