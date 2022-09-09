export const listDaysReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DAY':
      return [action.value, ...state];
    case 'REMOVE_DAY':
      const copyState = JSON.parse(JSON.stringify(state));
      copyState.splice(action.value.index, 1);
      const updateToDate = copyState.map((item) => ({
        ...item,
        day: new Date(item.day),
      }));
      return updateToDate;
    default:
      return state;
  }
};
