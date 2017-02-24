import {observable, computed} from 'mobx';
import localStorage from '../../common/local-storage';

export default class AppStore {
  @observable user: any = null;

  @computed get isLogined() {
    return this.user !== null;
  }
}