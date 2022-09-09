import React from 'react';
import './BaseButton.css';

const BaseButton = ({
  classButton,
  children,
  disabled,
  handleClick = null,
}) => {
  return (
    <button
      className={`button ${classButton}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default BaseButton;
