export const LOAD_COACHES_SUCCESS = 'LOAD_COACHES_SUCCESS';
export const LOAD_COACHES_PROGRESS = 'LOAD_COACHES_PROGRESS';

const coaches = (state={
  loading: false,
  items: []
}, action) => {
  switch (action.type) {
    case LOAD_COACHES_SUCCESS:
      return Object.assign({}, state, {
        items: action.type
      });
    case LOAD_COACHES_PROGRESS:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};

export default coaches;