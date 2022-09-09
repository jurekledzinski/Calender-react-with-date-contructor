import React, { useContext } from 'react';

import BaseButton from '../base/BaseButton';

import { StoreContextListDays } from '../store/StoreListDays';

const CalendarDay = ({
  calenderDays,
  classCalenderDay,
  children,
  id,
  selectable,
  setCalenderDays,
}) => {
  const { dispatchListDays, stateListDays } = useContext(StoreContextListDays);

  //Function to select day when flag = true and unselect day when flag = false
  const handleSelectUnSelectDay = (flag) => {
    const updatedCalendar = calenderDays.map((item) => ({
      ...item,
      selected: item.id === id ? flag : false,
    }));
    setCalenderDays(updatedCalendar);

    return updatedCalendar;
  };

  //Function to check is last added same as currently added by user then prevent it
  const handlePreventAddSameDayLikeLastOne = () => {
    const check = stateListDays[0]?.id === id;
    return check;
  };

  //Function add day to list
  const handelAddSelectedDayToList = (arr) => {
    const selectedDay = arr.find((item) => item.id === id);
    dispatchListDays({ type: 'ADD_DAY', value: selectedDay });
  };

  //Remove element in store context
  const handleRemoveDay = (index) => {
    dispatchListDays({ type: 'REMOVE_DAY', value: { index: index } });
  };

  //Function to check is day already selected
  const handleCheckIsAlreadySelectedDay = () => {
    const selectedAlreadyDay = calenderDays?.find(
      (item) => item.id === id && item.selected
    );
    return selectedAlreadyDay;
  };

  //Function invoked when user click day in calendar
  const handleSelectDay = () => {
    const selectedAlreadyDay = handleCheckIsAlreadySelectedDay();

    //When day is already select then after click again on it unselect id
    if (Boolean(selectedAlreadyDay)) return handleSelectUnSelectDay(false);

    //Prevent add same day last one added
    if (handlePreventAddSameDayLikeLastOne()) return;

    //Index last day to remove from list
    const indexObjDay = 9;

    //When list is 10 elements long remove last day in list
    if (stateListDays.length === 10) handleRemoveDay(indexObjDay);

    //Select day
    const arrUpdated = handleSelectUnSelectDay(true);

    //Add day to list
    handelAddSelectedDayToList(arrUpdated);
  };

  return (
    <BaseButton
      classButton={classCalenderDay}
      handleClick={handleSelectDay}
      disabled={selectable}
    >
      {children}
    </BaseButton>
  );
};

export default CalendarDay;
