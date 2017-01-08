import React, { Component } from 'react';
import { ScrollView, Image, Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'

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

class SessionDetails extends Component {
  render() {
    const gravatarUrl = this.props.Speakers[0].GravatarUrl

    return(
      <Modal style={{paddingTop: 30}}>
        <ScrollView style={{padding: 30}}>

          <Text style={styles.sessionTitle}>{this.props.Title}</Text>
          <Image source={{uri: `https:${gravatarUrl}`}} style={{width: 90, height: 90, marginTop: 30}}/>

          <Text style={{paddingTop: 20, paddingBottom: 20}}>{this.props.Abstract}</Text>

          <TouchableOpacity onPress={this.props.onPress}>
            <Text>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    )
  }
}

export default class Session extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAbstract: false
    }
  }

  showDetails() {
    this.setState({showAbstract: !this.state.showAbstract})
  }

  render() {
    return(
      <View style={styles.session}>
        <TouchableOpacity onPress={this.showDetails.bind(this)}>
          <Text style={styles.sessionTitle}>{ this.props.Title }</Text>
          { this.state.showAbstract && <SessionDetails {...this.props} onPress={this.showDetails.bind(this)}/> }
        </TouchableOpacity>
      </View>
    )
  }
}
