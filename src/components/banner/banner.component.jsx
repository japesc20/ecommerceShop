import React from 'react'

import Banner1 from '../../assets/fema-banner-1.jpg'
import Banner2 from '../../assets/fema-banner-2.jpg'
import Banner3 from '../../assets/fema-banner-3.jpg'
import Banner4 from '../../assets/fema-banner-4.jpg'
import Banner5 from '../../assets/fema-banner-5.jpg'

import './banner.styles.scss'

const Banner = () => {
  return (
    <div>
      <div className="banners">
        <div className="banner-slideshow" data-slidetime="6000" data-slideanimtime="800">
          <ul className="all-slides">
            <li className="slide" id="slide">
              <img src={Banner1} alt="Fema banner #2" />
            </li>
            <li className="slide" id="slide">
              <img src={Banner2} alt="Fema banner #2" />
            </li>
            <li className="slide" id="slide">
              <img src={Banner3} alt="Fema banner #3" />
            </li>
            <li className="slide" id="slide">
              <img src={Banner4} alt="Fema banner #4" />
            </li>
            <li className="slide" id="slide">
              <img src={Banner5} alt="Fema banner #5" />
              <div className="btn">
                <button>Shop Now</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner;