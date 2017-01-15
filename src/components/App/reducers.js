import { combineReducers } from 'redux';

export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL';

const loginModal = (state={
  isOpened: false
}, action) => {
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

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const loginStatus = (state={
  isLogined: false
}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggined: true
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggined: false
      });
    default:
      return state;

  }
};

const app = (state={}, action) => {
  return state;
};

export default combineReducers({
  app,
  loginModal,
  loginStatus
});
