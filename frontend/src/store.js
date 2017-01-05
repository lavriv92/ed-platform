import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducers from './components/App/reducers';
import indexReducers from './components/Index/reducers';

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  appReducers,
  indexReducers
});

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
