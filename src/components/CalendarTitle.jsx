import React from 'react';

import BaseTitle from '../base/BaseTitle';

const CalendarTitle = ({ chosenMonth, chosenYear }) => {
  //This function getMothName return month name
  //Is actual chosen month because chosenYear and copyMonth are dynamic
  const getMonthName = () => {
    //I do copy of chosenMonth to not mutate state directly
    let copyMonth = chosenMonth;
    //Set options to display long version month
    const options = { month: 'long' };
    //Assign name month returned from date obj to variable nameMonth
    const nameMonth = new Date(chosenYear, copyMonth + 1, 0).toLocaleString(
      undefined,
      options
    );
    //Modify nameMonth first letter to uppercase
    const upMonth = nameMonth.charAt(0).toUpperCase() + nameMonth.substring(1);
    //return current name month
    return upMonth;
  };

  return (
    <BaseTitle type="p" attrs={{ className: 'calender__title' }}>
      {getMonthName()} {chosenYear}
    </BaseTitle>
  );
};
export default CalendarTitle;
