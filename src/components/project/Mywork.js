import React from 'react'
import Carousel from 'react-multi-carousel';

function Mywork() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  return (
    <div>      
      <Carousel responsive={responsive} infinite={true} className='skill-slider'>
    <div className="item">
                        
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                      
                        <h5>Brand Identity</h5>
                    </div>
                    <div className="item">
                       
                        <h5>Logo Design</h5>
                    </div>
                    <div className="item">
                       
                        <h5>Web Development</h5>
                    </div>
     </Carousel></div>
  )
}

export default Mywork