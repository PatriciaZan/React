import React from "react";

const EventHandling = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Btn clic=ked', e.currentTarget);
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Mouse entered!' , e.currentTarget);
        
    }

  return (
    <div onMouseEnter={handleMouseEnter}>
        <h1>EventHandling</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default EventHandling