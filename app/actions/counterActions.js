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

export function addToTodoList(item) {
	return {
		type: types.ADD_TODO, item
	};
}

export function removeFromTodoList (id) {
  return { 
  	type: types.REMOVE_TODO, id
  };
}
