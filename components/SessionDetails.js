import React, { Component } from 'react';
import { ScrollView, Image, Modal, Text, TouchableOpacity, Platform } from 'react-native'
import styles from './styles/SessionStyles'

export default class SessionDetails extends Component {
  render() {
    const gravatarUrl = this.props.Speakers[0].GravatarUrl
    const margin = Platform.OS === "ios" ? 65 : 30

    return(
      <ScrollView style={{padding: 30, marginTop: margin}}>
        <Text style={styles.sessionTitle}>{this.props.Title}</Text>
        <Image source={{uri: `https:${gravatarUrl}`}} style={{width: 90, height: 90, marginTop: 30}}/>

        <Text style={{paddingTop: 20, paddingBottom: 20}}>{this.props.Abstract}</Text>
      </ScrollView>
    )
  }
}
