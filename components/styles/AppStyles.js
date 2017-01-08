import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    backgroundColor: '#f67f01',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    paddingTop: 20,
    margin: 0,
  },
  welcome: {
    color: 'white',
    textShadowColor: "#555",
    textShadowOffset: {width: 1, height: 1},
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default styles;
