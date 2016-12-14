import { createStore, combineReducers } from 'redux';

import appReducer from './containers/App/reducers';

let reducers = combineReducers({
  app: appReducer
});

export default createStore(reducers);
