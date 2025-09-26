
import React from 'react';

const YourComponent = () => {
  const handleScrollDown = () => {
    // Scroll down to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    // ... other JSX content
    <div onClick={handleScrollDown} style={{ cursor: 'pointer' }}>
      <i className="fa-solid fa-circle-chevron-down text-4xl text-herbal animate-bounce-slow mb-20"></i>
    </div>
  );
};

export default YourComponent;