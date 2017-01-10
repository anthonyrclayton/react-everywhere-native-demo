import React, { Component } from 'react';
import { Platform, Dimensions, Text, TextInput, View } from 'react-native';
import { searchSessions } from '../store/index'
import { connect } from 'react-redux'

const deviceWidth = Dimensions.get('window').width

class Search extends Component {
  filter(term) {
    this.props.searchSessions(term)
  }

  render() {
    const borderStyle = Platform.OS === "android" ? {} : {
      marginTop:20,
      shadowColor: '#222',
      shadowOffset: { width: 0, height: -1 },
      borderColor: '#333',
      borderBottomWidth: 1,
    }

    const textBoxStyle = {
      width: deviceWidth - 4,
      height: 50,
      padding: 4
    }

    return (
      <View style={borderStyle, {
          padding: 3,
          shadowOpacity: 0.8,}}>

        <TextInput
          placeholder="Search Sessions..."
          ref="input"
          onChangeText={this.filter.bind(this)}
          style={[textBoxStyle, borderStyle]}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchSessions: (term) => dispatch(searchSessions(term))
  }
}

export default connect(null, mapDispatchToProps)(Search)
