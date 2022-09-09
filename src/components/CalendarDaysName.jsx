import React from 'react';
import './CalendarDaysName.css';

const CalendarDaysName = () => {
  const handleGetDaysOftheWeek = () => {
    //Set arr to push to it days of the week
    const daysName = [];
    //Set date to start from monday
    let date = new Date(2022, 7, 29);
    //Set options object with weekday for toLocaleDateString
    const options = { weekday: 'short' };
    //Loop till i variable reach 7 like days
    for (let i = 1; i <= 7; i++) {
      let nameDay = date.toLocaleString(undefined, options);
      //Modify to nameDay to start with upperCase letter
      const upName = nameDay.charAt(0).toUpperCase() + nameDay.substring(1);
      //push short version name of the week to array daysName
      daysName.push(upName);
      //set Date and inside this method increament, one day forward
      date.setDate(date.getDate() + 1);
    }
    //return arr of name of the weeks
    return daysName;
  };

  return (
    <div className="calendar__wrapper-days-names">
      {handleGetDaysOftheWeek().map((item) => (
        <span className="calendar__name-day" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default CalendarDaysName;
