import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/About/About'
import Services from './components/services/Services'
import Mywork from './components/Mywork/Mywork'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
    </div>
  )
}

export default App;