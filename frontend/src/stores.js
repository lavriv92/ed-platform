import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './containers/App/reducers';
// import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  app: appReducer
});

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(rootSaga);
