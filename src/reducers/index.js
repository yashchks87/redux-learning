let init = {
  name : '',
  email : '',
};
export const rootReducers = (state=init,action) => {
  switch (action.type) {
    case 'GET_NAME':{
      return {
        ...state,
        name : action.name,
        email : action.email
      }
    }
    default:
      return state;

  }
}
