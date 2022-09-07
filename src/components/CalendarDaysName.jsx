import React from 'react';
import './CalendarDaysName.css';

const nameDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CalendarDaysName = () => {
  return (
    <div className="calendar__wrapper-days-names">
      {nameDays.map((item) => (
        <span className="calendar__name-day" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default CalendarDaysName;
