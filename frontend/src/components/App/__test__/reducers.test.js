import assert from 'assert';
import appReducers, { OPEN_LOGIN_MODAL, CLOSE_LOGIN_MODAL } from '../reducers';

describe('App reducers', () => {

  it('should open modal', () => {
    let { loginModal } = appReducers({}, {
      type: OPEN_LOGIN_MODAL
    });

    assert.equal(loginModal.isOpened, true);
  });

  it('should close modal', () => {
    let { loginModal } = appReducers({}, {
      type: CLOSE_LOGIN_MODAL
    });

    assert.equal(loginModal.isOpened, false);
  });

  describe('app', () => {

  });
});
