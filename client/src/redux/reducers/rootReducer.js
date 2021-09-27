import { combineReducers } from 'redux';
import usersReduser from './userReduser';

const redusersList = {
  user: usersReduser,
};

const rootReducer = combineReducers(redusersList);

export default rootReducer;
