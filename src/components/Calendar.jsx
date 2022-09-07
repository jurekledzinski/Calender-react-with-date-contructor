import React, { useState } from 'react';
import './Calendar.css';

import CalendarButton from './CalendarButton';
import CalendarDays from './CalendarDays';
import CalendarTitle from './CalendarTitle';

const Calendar = () => {
  const date = new Date();

  //Extract current day,month,year
  const [day, month, year] = [
    date.toLocaleDateString(),
    date.getMonth(),
    date.getFullYear(),
  ];

  //State to store objects with id, day as object date, blank true when not current month, false when current month
  const [calenderDays, setCalenderDays] = useState([]);
  //state to store number of month when change month by default is current month
  const [chosenMonth, setChosenMonth] = useState(month);
  //state to store number of year when change year by default current year
  const [chosenYear, setChosenYear] = useState(year);

  return (
    <>
      <div className="calender">
        <div className="calender__header">
          <CalendarButton
            chosenMonth={chosenMonth}
            classButton="calender__button"
            setChosenMonth={setChosenMonth}
            setChosenYear={setChosenYear}
            sign="-"
          >
            <span className="material-symbols-outlined">navigate_before</span>
          </CalendarButton>
          <CalendarTitle chosenMonth={chosenMonth} chosenYear={chosenYear} />
          <CalendarButton
            chosenMonth={chosenMonth}
            classButton="calender__button"
            setChosenMonth={setChosenMonth}
            setChosenYear={setChosenYear}
            sign="+"
          >
            <span className="material-symbols-outlined">navigate_next</span>
          </CalendarButton>
        </div>
        <CalendarDays
          calenderDays={calenderDays}
          chosenMonth={chosenMonth}
          chosenYear={chosenYear}
          day={day}
          setCalenderDays={setCalenderDays}
          setChosenMonth={setChosenMonth}
          setChosenYear={setChosenYear}
        />
      </div>
    </>
  );
};

export default Calendar;
