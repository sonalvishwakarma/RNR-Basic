
'use strict';

import React, { Component } from 'react';
import { AppRegistry , View, Text} from 'react-native';
import App from './app/containers/app.js';

export default class RNR extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightgray', marginTop : 50}}>
        <Text >Welcome </Text>
        <App/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNR', () => RNR);
