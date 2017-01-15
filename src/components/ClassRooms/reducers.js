export const LOAD_CLASSROOM_SUCCESS = 'LOAD_CLASSROOM_SUCCESS';
export const LOAD_CLASSROOM_PROGRESS = 'LOAD_CLASSROOM_PROGRESS';

const rooms = (state={
  loading: false,
  items: []
}, action) => {
  switch (action.type) {
    case LOAD_CLASSROOM_SUCCESS:
      return Object.assign({}, state, {
        items: action.type
      });
    case LOAD_CLASSROOM_PROGRESS:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};

export default rooms;
