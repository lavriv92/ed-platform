import { combineReducers } from 'redux';

export const LOAD_LAST_COURCES_SUCCESS = 'LOAD_LAST_COURCES_SUCCESS';
export const LOAD_LAST_COURCES_PROGRESS = 'LOAD_LAST_COURCES_PROGRESS';

const lastCourses = (state={
  loading: false,
  items: []
}, action) => {
  switch (action.type) {
    case LOAD_POPULAR_COURCES_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });
    case LOAD_POPULAR_COURCES_PROGRESS:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};

export const LOAD_POPULAR_COURCES_SUCCESS = 'LOAD_POPULAR_COURCES_SUCCESS';
export const LOAD_POPULAR_COURCES_PROGRESS = 'LOAD_POPULAR_COURCES_PROGRESS';

const popularCourses = (state={
  loading: false,
  items: []
}, action) => {
  switch (action.type) {
    case LOAD_POPULAR_COURCES_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });
    case LOAD_POPULAR_COURCES_PROGRESS:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};

export const LOAD_POPULAR_COACHES_SUCCESS = 'LOAD_POPULAR_COACHES_SUCCESS';
export const LOAD_POPULAR_COACHES_PROGRESS = 'LOAD_POPULAR_COACHES_PROGRESS';

const popularCoaches = (state={
  loading: false, 
  items: []
}, action) => {
  switch (action.type) {
    case LOAD_POPULAR_COACHES_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });
    case LOAD_POPULAR_COACHES_PROGRESS:
      return Object.assign({}, state, {
        loading: true
      }); 
    default:
      return state;
  }
};

export default combineReducers({
  popularCoaches,
  popularCourses,
  lastCourses
});