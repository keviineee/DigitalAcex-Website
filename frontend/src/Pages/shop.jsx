import React from 'react'
import Hero from '../Components/Hero/hero'
import Offers from '../Components/Offers/Offers'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const shop = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <NewArrivals/>
      <NewsLetter/>
    </div>
  )
}

export default shop
