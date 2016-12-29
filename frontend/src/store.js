import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducers from './components/App/reducers';
// import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  appReducers,
});

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(rootSaga);
