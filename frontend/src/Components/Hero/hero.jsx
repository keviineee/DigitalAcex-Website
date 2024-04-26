import React from 'react'
import './hero.css';
import arrowIcon from '../Assets/arrow.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="hero-left">
            <h2>#1 Seller at <a href="https://www.carousell.sg/u/digitalacex/">Carousell Singapore</a></h2>
            <div>
                <p>Cheap.</p>
                <p>Reliable.</p>
                <p>Safe.</p>
            </div>
            <div className="hero-shopnow-btn">
                <div>Shop Now</div>
                <img src={arrowIcon} alt=""/>
            </div>

        </div>

        <div className="hero-right">
        <iframe width="1000" height="563" src="https://www.youtube.com/embed/r553iGIDhqE?si=nl6CV8ibGmDfJXkU&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" />
        </div>
    </div>
  )
}

export default Hero