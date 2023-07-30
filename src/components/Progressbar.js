import React, { useEffect, useRef} from 'react'
import './Skills.css'
//import { useLocation } from 'react-router-dom';

function Progressbar(props) {
 const progressBarRef=useRef(null);
 
 


  useEffect(() => {
    let currentWidth = 0;
    const targetWidth = props.percentage;

    // Calculate the width increment based on the target percentage and animation duration
    const increment = targetWidth / 50 ; 

    // Callback function for the ref
    const updateProgressBar = () => {
      if (progressBarRef.current && currentWidth < targetWidth) {
        currentWidth += increment;
        progressBarRef.current.style.width = `${currentWidth}%`;
        requestAnimationFrame(updateProgressBar);
        
      }
    };

    // Start the animation
    requestAnimationFrame(updateProgressBar);
  }, [props.percentage]);






  return (


     <div>
      <span className='text'>{props.text}</span>
      <div className="progress-bar">
        <div className="progress" ref={progressBarRef}>
          <span className="percentage">{props.percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default Progressbar