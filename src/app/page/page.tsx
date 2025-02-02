import React from 'react'
import Aviupper from './aviupper'
import Header from './header'
//mport Header2 from './header2'
import Delivery from './delivery'
import Hero from './hero'
import HeroSection from './herosection'
import Icons from '../home/products'
import Signup from './signup'
import Footer from '../home/footer'

const page = () => {
  return (
    <div>
        <Delivery/>
        <Header/>
        <Aviupper/>
        <HeroSection/>
        <Hero/>
        <Icons/>
        <Signup/>
        <Footer/>
    </div>
  )
}

export default page