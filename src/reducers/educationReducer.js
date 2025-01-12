const initialState = {
    education: []
  };
  
  const educationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EDUCATION':
        return {
          ...state,
          education: [...state.education, action.payload],
        };
  
      case 'DELETE_EDUCATION':
        return {
          ...state,
          education: state.education.filter((_, index) => index !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default educationReducer;
  