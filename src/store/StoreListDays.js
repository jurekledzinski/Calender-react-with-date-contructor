import React, { createContext, useReducer } from 'react';
import { listDaysReducer } from './storeListDaysReducer';

export const StoreContextListDays = createContext();

const StoreListDaysProvider = ({ children }) => {
  const [stateListDays, dispatchListDays] = useReducer(listDaysReducer, []);

  return (
    <StoreContextListDays.Provider value={{ dispatchListDays, stateListDays }}>
      {children}
    </StoreContextListDays.Provider>
  );
};

export default StoreListDaysProvider;
