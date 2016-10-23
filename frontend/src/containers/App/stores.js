import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../../dispatcher';

class AppStore extends ReduceStore {
  getInitialState() {
    return {};
  }

  reduce(state, action) {
    return state;
  }
}

export default new AppStore(AppDispatcher);
