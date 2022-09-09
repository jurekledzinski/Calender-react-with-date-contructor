import React, { useContext, useCallback, useEffect } from 'react';

import CalendarDay from './CalendarDay';
import './CalendarDays.css';

import { StoreContextListDays } from '../store/StoreListDays';

const CalendarDays = ({
  calenderDays,
  chosenMonth,
  day,
  chosenYear,
  setCalenderDays,
}) => {
  const { stateListDays } = useContext(StoreContextListDays);
  //Method to get previous days from previous month
  //To display in calendar as faded days
  //When chosenMonth or chosenYear change useCallback is called
  const handleGetFirstWeek = useCallback(() => {
    let arr = [];
    // I get here day index for 1 day in month
    const indexCurrentDay = new Date(chosenYear, chosenMonth, 1).getDay();
    //Get amount days need to add from previous month to first week
    let difference = indexCurrentDay - 1;
    //Some months special month can have minus value so i set it to 6 saturday
    if (difference < 0) difference = 6;

    //I loop thorugh amount days need to add from previous month
    // I use negative value let variable to go backward in day: new Date(chosenYear, chosenMonth, -i),
    // To get previous days object data
    for (let i = 0; i < difference; i++) {
      arr.push({
        id: Date.now() * Math.random(),
        day: new Date(chosenYear, chosenMonth, -i),
        blank: true,
        selectable: false,
        selected: false,
      });
    }

    //I return previous days and reverse arr to display in correct order
    return arr.reverse();
  }, [chosenMonth, chosenYear]);

  //Method to get next days in last week from previous month
  //To display in calendar as faded days
  //When chosenMonth or chosenYear change useCallback is called
  const handleGetLastWeek = useCallback(() => {
    let arr = [];
    let copyMonth = chosenMonth;
    //I get here last day index of last day in current check month
    const indexLastDay = new Date(chosenYear, copyMonth + 1, 0).getDay();
    // I gave 7 because 7 days in row columns
    // 7 - 0 is a case when is 7, so for sunday is 0 that is why I give condition below
    let difference = 7 - indexLastDay;
    //When sunday I give difference to 0 again
    if (difference === 7) difference = 0;

    //I loop and add amount next month days to array
    for (let i = 1; i <= difference; i++) {
      arr.push({
        id: Date.now() * Math.random(),
        day: new Date(chosenYear, copyMonth + 1, i),
        blank: true,
        selectable: false,
        selected: false,
      });
    }
    //I return arr of next month days
    return arr;
  }, [chosenMonth, chosenYear]);

  useEffect(() => {
    //Here I set acctual days to array like from 1 to 31
    const arr = [];
    //I create copy month to not mutate state directly
    let copyMonth = chosenMonth;
    //Here I have first day of chosen month and at first mount
    let firstDate = new Date(chosenYear, chosenMonth, 1).getDate();
    //Here I have last day of the chosen month and at first mount
    let lastDay = new Date(chosenYear, copyMonth + 1, 0).getDate();

    // I loop in for loop from 1 to example 31 and this obj I add to arr
    for (firstDate; firstDate <= lastDay; firstDate++) {
      arr.push({
        id: Date.now() * Math.random(),
        day: new Date(chosenYear, chosenMonth, firstDate),
        blank: false,
        selectable: true,
        selected: false,
      });
    }

    if (arr.length) {
      //I set this arr of days objects to calendarDays state to display it using map()
      setCalenderDays(arr);
    }
    //When year or month change then new arr chosen days of month is added to CalendarDays state
    //And render component and display days in browser
  }, [chosenYear, chosenMonth, setCalenderDays]);

  useEffect(() => {
    //Here I return previous days month to add to first week
    const arrPrevious = handleGetFirstWeek();
    //Here I return last days next month to add to last week
    const arrForward = handleGetLastWeek();
    //Here I added them to state and after it component render and display them all togheter in browser
    //faded days from previous and next month with chosen days of month
    setCalenderDays((prev) => [...arrPrevious, ...prev, ...arrForward]);
  }, [handleGetLastWeek, handleGetFirstWeek, setCalenderDays]);

  //Function to select last day from list to calendar when switch months
  const handleSelectLastDayWhenSwitchMonth = useCallback(() => {
    const day = stateListDays[0]?.day?.toLocaleDateString();

    setCalenderDays((prev) => {
      return prev.map((item) => ({
        ...item,
        selected: item.day.toLocaleDateString() === day ? true : item.selected,
      }));
    });
  }, [setCalenderDays, stateListDays]);

  useEffect(() => {
    handleSelectLastDayWhenSwitchMonth();
  }, [chosenMonth, handleSelectLastDayWhenSwitchMonth]);

  //item.day.toLocaleDateString() === day if current day then I give box--current class
  //get background color fade orange
  //if blank property in obj is true then color is fade for day it means is previous or next month days added to first or last week
  //if blank false means it's chosen days of month

  return (
    <div className="calendar__wrapper-days">
      {calenderDays.map((item) => (
        <CalendarDay
          classCalenderDay={
            item.day.toLocaleDateString() === day
              ? item.blank
                ? 'button--day button--day-fade'
                : item.selected
                ? 'button--day button--day-current button--selected'
                : 'button--day button--day-current'
              : item.blank
              ? 'button--day button--day-fade'
              : item.selected
              ? 'button--day button--selected'
              : 'button--day'
          }
          id={item.id}
          key={item.id}
          selectable={!item.selectable}
          setCalenderDays={setCalenderDays}
          calenderDays={calenderDays}
        >
          {new Date(item.day).getDate()}
        </CalendarDay>
      ))}
    </div>
  );
};

export default CalendarDays;

//Loop explenation display days
//if  item.day.toLocaleDateString() === day means when current day and property blank is true which means it is not current month
//then add defaukt class button--day plus button--day-fade which makes buttons fade
//and for current day also when button (:item.selected) is true then add default class (button--day) current day (button--day-current) plus button selected (button--selected)
//if not selected then add class default (button--day) and button--day-current

//When it's not current day then if item.blank is true then add class default (button--day) and class (button--day-fade) means not current month
//when item.blank is false and item.selected is true then add default class (button--day) and (button--selected)
// If item.selected false then add only default class (button--day)
