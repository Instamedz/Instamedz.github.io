import React, { useState, useEffect } from 'react'

export default function UserWindow() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
     
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  
  return screenSize
  
}