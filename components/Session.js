import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Session extends Component {
  render() {
    return(
      <View>
        <Text>{ this.props.Title }</Text>
        <Text>{ this.props.Abstract }</Text>
      </View>
    )
  }
}
