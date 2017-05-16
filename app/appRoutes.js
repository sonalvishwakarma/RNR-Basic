{/*import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';
import CounterApp from './counterApp';

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='tab1' title='Counter' component={CounterApp} ></Scene>
  </Scene>
);

const ConnectedRouter = connect()(Router);
//const store = createStore(reducers);

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

*/}