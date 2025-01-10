import React, { useRef } from 'react';
import './Display.css';

export default function Display(props) {
  const displayRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();

    const scrollAmount = event.deltaY;
    displayRef.current.scrollLeft += scrollAmount;
  };

  return (
    <div
      ref={displayRef}
      className="display"
      onWheel={handleWheel} 
      scroll-smooth
    >
      {props.value}
    </div>
  );
}
