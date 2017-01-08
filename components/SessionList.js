import React, { Component } from 'react';
import Session from './Session'
import { View, ListView } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles/AppStyles'

class SessionList extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.Id !== r2.Id});
  }

  render() {
    const { sessions } = this.props

    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.ds.cloneWithRows(sessions)}
          renderRow={s => <Session key={s.Id} {...s} />}
        />
      </View>
    );
  }
}

const mapStateToProps = ({sessions, loading}) => {
  return { sessions, loading }
}

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (filter) => dispatch(applyFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList);
