const initialState = {
    fname: '',
    lname: '',
    phone: '',
    address: '',
    url: ''
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  