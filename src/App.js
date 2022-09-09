import React from 'react';
import StoreListDaysProvider from './store/StoreListDays';

import Calendar from './components/Calendar';

const App = () => {
  return (
    <StoreListDaysProvider>
      <Calendar />
    </StoreListDaysProvider>
  );
};

export default App;
