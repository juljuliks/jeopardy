import { END_GAME, UPDATE_GAME } from '../actionsTypes/game';

export default function gameReduser(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_GAME:
      return [...state, payload];
    case END_GAME:
      return [];
    default:
      return state;
  }
}
