import React, { useEffect, useRef, useState } from 'react'
import "./CircularProgressBar.css"
function CircularProgressBar(props) {
    const progressBarRef = useRef(null);
    const [animation, setAnimation] = useState(false);
  
    useEffect(() => {
      let currentPercentage = 0;
  
      // Calculate the increment value based on the target percentage and animation duration
      const increment = props.percentage / 50; // 1000ms / 16ms (approximately 60 frames per second)
  
      // Calculate the circumference of the circle
      const circumference = 2 * Math.PI * 45;
  
      // Callback function for the ref
      const updateProgressBar = () => {
        if (progressBarRef.current && currentPercentage <props.percentage) {
          currentPercentage += increment;
          const dashOffset = ((100 - currentPercentage) / 100) * circumference;
          progressBarRef.current.style.strokeDasharray = `${circumference}px ${circumference}px`;
          progressBarRef.current.style.strokeDashoffset = dashOffset;
          requestAnimationFrame(updateProgressBar);
          
        }
      };
  
      // Start the animation
      requestAnimationFrame(updateProgressBar);
    }, [props.percentage]);
  return (
    <div className='circle-container'>
    <span className='text'>{props.text}</span>
    <div>
    <svg className="circular-progress" viewBox="0 0 100 100">
    <circle className="progress" ref={progressBarRef} cx="50" cy="50" r="45" />
    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle">{`${props.percentage}%`}</text>
    
  </svg>
  </div>
  </div>
  )
}

export default CircularProgressBar