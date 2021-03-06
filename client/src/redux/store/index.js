import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const initialState = {
  user: {},
  game: [],
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware()),
);

export default store;
