import React from 'react'
import './Banner.scss'

function Banner() {
  return (
    <div className='banner' >
        <div className="content">
          
                <h1 className="title">Movie </h1>
                <div className="banner-buttons">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h3 className='discription' >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam,
                </h3>
            
        </div>
        <div className="fade">
          
        </div>
    </div>
  )
}

export default Banner