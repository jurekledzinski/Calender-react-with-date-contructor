import React from 'react';
import './BaseTitle.css';

const BaseTitle = ({ children, attrs, type }) => {
  return React.createElement(type, attrs, children);
};

export default BaseTitle;
