import React, {Component} from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  Text,
  Image,
  View
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from './components/InitialScreen/Login';
import Register from './components/InitialScreen/Register';
import ForgotPassword from './components/InitialScreen/ForgotPassword';
import Drawer from './Navigator/Drawer_Nav';
import {UserData} from './redux/actions/UserData_action';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentWillMount() {
    AsyncStorage
      .getItem("@UserId:key")
      .then((value) => {
        console.log('came here' + value);
        if (value !== null) {
          console.log('UserId:' + value);
          this
            .props
            .UserData(value);
        } else {
          this
            .props
            .UserData(0);
        }
        setTimeout(() => {
          this.setState({isLoading: false});
        }, 5);

    
      })
      .done();

  }

  render() {

    console.log('loading:' + this.state.isLoading);

    if (this.state.isLoading) {
      return <View style={{
        flex: 1
      }}></View>;
    } else {
      return <Stack/>
    }
  }
}

const Stack = StackNavigator({
  Login: {
    screen: Login,
    title: Login,
    navigationOptions: {
      header: null
    }
  },

  Register: {
    screen: Register,
    title: Register,
    navigationOptions: {
      header: null
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    title: ForgotPassword,
    navigationOptions: {
      header: null
    }
  },
  Drawer: {
    screen: Drawer,
    title: Drawer,
    navigationOptions: {
      header: null
    }
  }
}, {initialRouteName: 'Drawer'});

const mapStateToProps = (state, ownProps) => {
  // console.log('state:' + JSON.stringify(state));
  return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Main);
