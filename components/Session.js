import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import SessionDetails from './SessionDetails'
import styles from './styles/SessionStyles'
import { Actions } from 'react-native-router-flux'

export default class Session extends Component {
  showDetails() {
    Actions.session(this.props)
  }

  render() {
    return(
      <View style={styles.session}>
        <TouchableOpacity onPress={this.showDetails.bind(this)}>
          <Text style={styles.sessionTitle}>{ this.props.Title }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
