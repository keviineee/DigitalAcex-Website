import React from 'react'
import './NewArrivals.css';
import new_arrivals from '../Assets/new_arrivals';
import Item from '../Item/Item';

const NewArrivals = () => {
  return (
    <div className='newarrivals'>
        <h1>NEW ARRIVALS</h1>
        <hr/>

        <div className="arrival">
            {new_arrivals.map((item, i) => {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewArrivals