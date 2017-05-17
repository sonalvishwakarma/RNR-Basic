import * as types from '../actions/actionTypes';

{/*const initialState = {
  todoList: {}
};

export default function todoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todoList: state.todoList
      };
    default:
      return state;
  }
  }*/}


export default function todoReducer(state={ todoList: {} }, action ) {
    const todoList = { ...state.todoList };
    switch(action.type) {
    case types.ADD_TODO:
        const newId = Object.keys(todoList).length;
        todoList[`todo${newId}`] = action.item
      return { ...state, todoList };          
    case types.REMOVE_TODO:
        delete todoList[action.id];
        return { ...state, todoList };      
    default:
      return state;
    }
};

