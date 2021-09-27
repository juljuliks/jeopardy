import { UPDATE_GAME } from '../actionsTypes/game';

export default function gameReduser(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_GAME:
      return [...state, Number(payload)];

    default:
      return state;
  }
}
