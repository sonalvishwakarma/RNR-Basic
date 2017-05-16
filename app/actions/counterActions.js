import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function addtodo(text) {
	return {
		type: types.ADD_TODO, text
	};
}
