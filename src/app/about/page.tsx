import React from 'react'
import Header from '../home/header'
import Upperheader from '../home/uheader'
import ProductDetails from './productdetails'
import Banner from './banner'
//import RelatedProducts from './relatedproducts'
import Icons from './icons'
import SubscriptionSection from './subscriptionsection'
import Footer from '../home/footer'
import Like from './relatedproducts'

const page = () => {
  return (
    <div>
      <ProductDetails/>
      <Banner/>
      <Header/>
      <Like/>
      <Icons/>
      <SubscriptionSection/>
      <Footer/>
    </div>
  )
}

export default page