import React from 'react';
import './BaseButton.css';

const BaseButton = ({ classButton, children, handleClick = null }) => {
  return (
    <button className={`button ${classButton}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default BaseButton;
