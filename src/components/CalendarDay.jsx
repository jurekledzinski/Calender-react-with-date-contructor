import React from 'react';
import './CalendarDay.css';

const CalendarDay = ({ classCalenderDay, children }) => {
  return <div className={classCalenderDay}>{children}</div>;
};

export default CalendarDay;
