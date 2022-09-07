import React from 'react';

import BaseTitle from '../base/BaseTitle';

const CalendarTitle = ({ chosenMonth, chosenYear }) => {
  //This function getMothName return month name
  //Is actual chosen month because chosenYear and copyMonth are dynamic
  const getMonthName = () => {
    //I do copy of chosenMonth to not mutate state directly
    let copyMonth = chosenMonth;
    return new Date(chosenYear, copyMonth + 1, 0).toLocaleString('en-EN', {
      month: 'long',
    });
  };

  return (
    <BaseTitle type="p" attrs={{ className: 'calender__title' }}>
      {getMonthName()} {chosenYear}
    </BaseTitle>
  );
};
export default CalendarTitle;
