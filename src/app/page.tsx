import React from 'react'
import Upperheader from './home/uheader'
import Header from './home/header'
// import HeroSection from './home/herosection'
import Footer from './home/footer'
import MyComponent from './home/mycomponents'
import NewCeramics from './home/newceramics'
import OurPopularProducts from './home/ourpopularproducts'
import SubscriptionSection from './home/subscriptionsection'
import HeroSection from './home/herosection'
import Icons from './about/icons'

const home= () => {
  return (
    <div>
      <Header/>
      <Upperheader/>
      <MyComponent/>
      <Icons/>
      <NewCeramics/>
      <OurPopularProducts/>
      <SubscriptionSection/>
      
      <HeroSection/>
      
    
      <Footer/>
    </div>
  )
}

export default home