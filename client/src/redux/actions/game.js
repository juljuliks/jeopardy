import { UPDATE_GAME, END_GAME } from '../actionsTypes/game';

export const updateGame = (payload) => ({
  type: UPDATE_GAME,
  payload,
});

export const endGame = (payload) => ({
  type: END_GAME,
  payload,
});
