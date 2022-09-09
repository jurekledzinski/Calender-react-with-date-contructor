import React from 'react';

const ListDaysCard = ({ classListElement, day }) => {
  const handleDisplayDate = () => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    return new Date(day).toLocaleString(undefined, options);
  };

  return <li className={classListElement}>{handleDisplayDate()}</li>;
};

export default ListDaysCard;
