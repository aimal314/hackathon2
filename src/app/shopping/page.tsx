import React from 'react'
import Header from '../home/header'
import Upperheader from '../home/uheader'
import About from './about'
import FilterBar from './filterbar'
import ShoppingPictures from './shoppingpictures'
import { Shojumaru } from 'next/font/google'
import Shop from './defaultshop'
import Cart from './cart'
import Footer from '../home/footer'

const pagr = () => {
  return (
    <div>
        <Header/>
        <Upperheader/>
        <About/>
        <FilterBar/>
        <ShoppingPictures/>
        <Shop/>
        <Cart/>
        <Footer/>
    </div>
  )
}

export default pagr