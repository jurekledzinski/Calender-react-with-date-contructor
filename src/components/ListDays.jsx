import React from 'react';
import './ListDays.css';

const ListDays = ({ children, classListDays }) => {
  return <ol className={classListDays}>{children}</ol>;
};

export default ListDays;
