import { LOGIN_USER, LOGOUT_USER } from '../actionsTypes/users';

export default function userReduser(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return payload;

    case LOGOUT_USER:
      return {};

    default:
      return state;
  }
}
