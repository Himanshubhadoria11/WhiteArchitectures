import React from 'react'
import Projects from './Projects'
import About from './About'
import News from './News'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'


function Home() {
  return (
   <>
   <Navbar/>
   <Projects/>
   <About/>
   <News/>
   <Services/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home