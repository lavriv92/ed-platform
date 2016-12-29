import { combineReducers } from 'redux';

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';

const initialState = {
  isOpened: false
};

const loginModal = (state=initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return Object.assign({}, state, {
        isOpened: true
      });
    case CLOSE_LOGIN_MODAL:
      return Object.assign({}, state, {
        isOpened: false
      });
    default:
      return state;
  }
};

const app = (state={}, action) => {};

export default combineReducers({
  app,
  loginModal
});
