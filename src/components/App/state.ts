import {observable, computed} from 'mobx';
import localStorage from '../../common/local-storage';

class AppStore {
  @observable user: any = null;

  @computed get isLogined() {
    return this.user !== null;
  }
}

const store = new AppStore();

export default store;
