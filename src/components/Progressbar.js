import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
//import { useLocation } from 'react-router-dom';

function Progressbar(props) {
 const progressBarRef=useRef(null);
 const [animation,setAnimation]=useState(false);
 


  useEffect(() => {
    let currentWidth = 0;
    const targetWidth = props.percentage;

    // Calculate the width increment based on the target percentage and animation duration
    const increment = targetWidth / 50 ; 

    // Callback function for the ref
    const updateProgressBar = () => {
      if (progressBarRef.current) {
        currentWidth += increment;
        progressBarRef.current.style.width = `${currentWidth}%`;

        // Check if the target width is reached
        if (currentWidth >= targetWidth) {
          setAnimation(true);
        } else {
          requestAnimationFrame(updateProgressBar);
        }
      }
    };

    // Start the animation
    requestAnimationFrame(updateProgressBar);
  }, [props.percentage]);






  return (


     <div>
      <span className='text'>{props.text}</span>
      <div className="progress-bar">
        <div className={`progress ${animation? 'animate' : ''}`} ref={progressBarRef}>
          <span className="percentage">{props.percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default Progressbar