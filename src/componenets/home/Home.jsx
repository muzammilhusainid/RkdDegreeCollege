import React from 'react'
import Header from '../header/Header'
import Carousel from '../carousel/Carousel'
import NoticeEvent from '../NoticeEvents/NoticeEvent'
import Courses from '../courses/Courses'
import About from '../about/About'
import Facilities from '../facility/Facilities'
import Staff from '../staff/Staff'
import Counter from '../counter/Counter'
import Footer from '../footer/Footer'
import Director from '../director/Director'

const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <NoticeEvent/>
      <Counter/>
      <Facilities/>
      <Footer/>
    </div>
  )
}

export default Home