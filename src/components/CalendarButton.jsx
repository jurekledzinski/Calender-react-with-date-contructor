import React from 'react';
import BaseButton from '../base/BaseButton';

const CalendarButton = ({
  classButton,
  children,
  chosenMonth,
  setChosenMonth,
  setChosenYear,
  sign,
}) => {
  //I made one function to handle previous and next month when click arrows previous or next
  const handleControlButtons = () => {
    //If i pass to sign prop '-' then is previous button click
    const condition = sign.includes('-');

    //When previous btn then !chosenMonth i meant 0 condition otherwise chosenMonth === 11
    if (condition ? !chosenMonth : chosenMonth === 11) {
      //So when !previous btn and chosenMonth === 0 then setChosenMonth to 11 I mean December
      //So when next btn and chosenMonth === 11 then seChosenMonth to 0 I mean January
      setChosenMonth(condition ? 11 : 0);
      //When previous btn then I decrease number year otherwhise I increase when click btn
      setChosenYear((prevValue) => (condition ? prevValue - 1 : prevValue + 1));
      return;
    }
    //When previous btn then I decrease number month otherwhise I increase when click btn
    setChosenMonth((prevValue) => (condition ? prevValue - 1 : prevValue + 1));
  };

  return (
    <BaseButton classButton={classButton} handleClick={handleControlButtons}>
      {children}
    </BaseButton>
  );
};

export default CalendarButton;
