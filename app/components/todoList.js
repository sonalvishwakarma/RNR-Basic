import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight, TextInput } from 'react-native';

export default class TodoList extends Component {
  render(){
    return (
      <ScrollView>
      <View>
        <Text >To Do</Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Add item" />
            <Text>List</Text>
        </View>
      </ScrollView>
    );
  }
}
