import React, { Component } from 'react';
import App from './App'
import SessionDetails from './SessionDetails'
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root" navigationBarStyle={{backgroundColor: '#f67f01'}}>
    <Scene key="app" component={App} title="CodeMash" initial/>
    <Scene key="session" component={SessionDetails} title="CodeMash"/>
  </Scene>
);

export default class Routes extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}
