import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutus from './Aboutus'
import Services from './Services'
import Portfolio from './Portfolio'
import Projects from './Projects'
import Footer from './Footer'


const Home = () => {
  return (
    <div className=' bg-gray-50 overflow-x-hidden '>
      
        
          <Hero/>
          <Aboutus/>
          <Services/>
          <Portfolio/>
          <Projects/>
          <Footer/>
    </div>
  )
}

export default Home