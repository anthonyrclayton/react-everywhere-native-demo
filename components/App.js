import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SessionList from './SessionList'
import { Provider } from 'react-redux'
import styles from './styles/AppStyles'
import store, { updateSessions } from '../store'

const SESSIONS_URL = 'https://speakers.codemash.org/api/sessionsdata'

export default class App extends Component {
  constructor(props) {
    super(props)

    fetch(SESSIONS_URL).then(r => r.json()).then((sessions) => {
      store.dispatch(updateSessions(sessions))
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.header} >
            <Text style={styles.welcome}>
              Welcome to CodeMash!
            </Text>
          </View>
          <SessionList/>
        </View>
      </Provider>
    );
  }
}
