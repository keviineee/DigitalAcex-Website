import React from 'react'
import banner from '../Components/Assets/banner_mens.png'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import all_product from '../Components/Assets/all_product'
import './CSS/shop.css'

const shop = () => {
  return (
    <div className='shop'>
      <img className ="banner" src={banner} alt=""/>
      <div className='shop-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shop-products">
        {all_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      <div className="shop-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default shop