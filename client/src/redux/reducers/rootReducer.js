import { combineReducers } from 'redux';
import usersReduser from './userReduser';
import gameReduser from './gameReducer';

const redusersList = {
  user: usersReduser,
  game: gameReduser,
};

const rootReducer = combineReducers(redusersList);

export default rootReducer;
