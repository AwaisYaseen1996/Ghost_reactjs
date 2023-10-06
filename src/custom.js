import React, { useRef } from 'react';

function MyComponent() {
  const myButtonRef = useRef(null);

  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <button ref={myButtonRef} onClick={handleClick}>
      Click me
    </button>
  );
}

export default MyComponent;
