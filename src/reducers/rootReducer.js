import { combineReducers } from 'redux';
import profileReducer from './profileReducer';  
import educationReducer from './educationReducer';  

const rootReducer = combineReducers({
  profile: profileReducer,
  education: educationReducer,  
});

export default rootReducer;
