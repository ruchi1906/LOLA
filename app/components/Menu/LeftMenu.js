import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
  TouchableHighlight,
  Alert
} from "react-native";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {StackNavigator} from 'react-navigation';
import {UserData} from '../../redux/actions/UserData_action';
// import styles from "../../styles/LeftMenuData_Styles"; import PopupDialog,
// {DialogTitle} from 'react-native-popup-dialog';

import {NavigationActions} from 'react-navigation';
const navigateAction = NavigationActions;

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {}

  Logout = () =>{
    
    AsyncStorage.setItem('@UserId:key', '0');   
    this.props.UserData(0);

    // AsyncStorage
    // .getItem("@UserId:key")
    // .then((value) => {
    //   console.log('came here' + value);
    // })
    // .done();


    this
    .props
    .navigation
    .dispatch(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Drawer'})]
    }));
    Alert.alert('Logout successfull');
  }

  render() {
    const {navigation} = this.props;
    return (

      <View style={{
        flex: 1
      }}>

        <ScrollView contentContainerStyle={{
          width: window.width
        }}>

          {parseInt(this.props.userId) === 0
            ? <TouchableOpacity
                style={{
                marginTop: 50,
                height: 50
              }}
                onPress=
                {()=>{
                   navigation.navigate('DrawerClose')
                   navigation.navigate('TermsandConditions');
                   }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"Terms & Conditions"}</Text>
              </TouchableOpacity>
            : <View>

              <TouchableOpacity
                style={{
                marginTop: 50,
                height: 50
              }}
                onPress=
                {()=>{ 
                  navigation.navigate('DrawerClose')
                  navigation.navigate('MyProfile');
                }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"My Profile"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                marginTop: 10,
                height: 50
              }}
                onPress=
                {()=>{ navigation.navigate('DrawerClose')
                navigation.navigate('AboutLola');
                }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"About Lola"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                marginTop: 10,
                height: 50
              }}
                onPress=
                {()=>{ navigation.navigate('DrawerClose')
                navigation.navigate('ForLolaGuardian');
                }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"For Lola's Guardian"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                marginTop: 10,
                height: 50
              }}
                onPress=
                {()=>{ navigation.navigate('DrawerClose')
                navigation.navigate('TermsandConditions');
                }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"Terms & Conditions"}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                marginTop: 10,
                height: 50
              }}
              onPress = {()=>{
                this.Logout();
                navigation.navigate('DrawerClose')
              }}>

                <Text
                  style={{
                  marginLeft: 10,
                  fontSize: 15
                }}>{"Logout"}</Text>
              </TouchableOpacity>
            </View>
}

        </ScrollView>

      </View>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
 // console.log('In Menu:' + JSON.stringify(state));
  return {userId: state.UserData_red.UserId}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
  UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
