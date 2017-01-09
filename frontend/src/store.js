import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import app from './components/App/reducers';
import index from './components/Index/reducers';
import coaches from './components/Coaches/reducers';
import classrooms from './components/ClassRooms/reducers';

let sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
  app,
  index,
  coaches,
  classrooms
});

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);
