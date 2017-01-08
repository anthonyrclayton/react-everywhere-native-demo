import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  sessionTitle: {
    fontWeight: 'bold'
  },
  session: {
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderBottomWidth: 1
  },
  sessionRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default class Session extends Component {
  render() {
    return(
      <View style={styles.session}>
        <Text style={styles.sessionTitle}>{ this.props.Title }</Text>
      </View>
    )
  }
}
