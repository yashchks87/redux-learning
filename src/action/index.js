export const getName = action => {
  return {
    type : 'GET_NAME',
    ...action
  };
};
