{/*import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import TodoList from '../components/todoList';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <TodoList
      todoList={state.todoList}
      {...actions} />
    );
  }
}


export default connect(state => ({
   state: state.todoList
 }),
 (dispatch) => ({
   actions: bindActionCreators(counterActions, dispatch)
  })
)(ToDoApp);
*/}