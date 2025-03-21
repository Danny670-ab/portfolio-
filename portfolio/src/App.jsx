import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About'
import Service from './component/Service'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Service/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App