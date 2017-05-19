import * as types from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 5
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 5
      };
    default:
      return state;
  }
}
