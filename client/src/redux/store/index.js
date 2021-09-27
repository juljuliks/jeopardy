import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const initialState = {
  user: {},
  game: {
    scores: [
      { catId: 1, score: 0 },
      { catId: 2, score: 0 },
    ],
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware()),
);

export default store;
