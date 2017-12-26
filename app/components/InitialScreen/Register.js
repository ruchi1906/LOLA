import React, {Component} from 'react';
var validators = require('../../lib/validators').validators();
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
  View,Alert,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../../styles/Registerstyles';
//import { CheckBox } from 'react-native-elements'
import Header from '../../common/header';
import CheckBox from 'react-native-checkbox';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.registerCall = this
      .registerCall
      .bind(this);

    this.state = {
      isDateTimePickerVisible: false,
      firstname: '',
      lastname: '',
      email: '',
      mobile_No: '',
      password: '',
      gender: '',
      terms_condition: false,
      loading: false,
      Language: '',
      Birthdate: 'Birth Date',
      login1: {}
    }
  }

  _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});
  
  _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

  _handleDatePicked = (date) => {
    
            this._hideDateTimePicker();
            let formattedDate = new Date(date).toLocaleDateString();
            // console.log(fordat + 'A date has been picked: ', + formattedDate );
            this.setState({Birthdate: formattedDate});
        };
  
  registerCall() {
    console.log('inside registerCall call' + JSON.stringify(this.state));
    if (!validators.RegularExpressionName(this.state.firstname)) {
      Alert.alert('Enter a valid first name');
      this
        .refs
        .firstname
        .focus();
    } else if (!validators.RegularExpressionName(this.state.lastname)) {
      Alert.alert('Enter a valid last name');
      this
        .refs
        .lastname
        .focus();
    } else if (!validators.RegularExpressionEmail(this.state.email)) {
      Alert.alert('Enter a valid email id');
      this
        .refs
        .email
        .focus();
    } else if (!validators.RegularExpressionPassword(this.state.password)) {
      Alert.alert("Your password should contain \n Minimum 7 characters including atleast 1 number");
      this
        .refs
        .password
        .focus();
    } else if (!(this.state.gender === 0 || this.state.gender === 1)) {
      Alert.alert('Please selest Gender');
    } else if (!validators.RegularExpressionMobileNumber(this.state.mobile_No)) {
      Alert.alert('Please enter valid Phone Number');
      this
        .refs
        .mobile_No
        .focus();
    } else if (this.state.terms_condition === false) {
      Alert.alert('Please select Terms and condition first');
    } else if (this.state.Birthdate === 'Birth Date' ) {
      Alert.alert('Please enter language');
    } else if (this.state.Language === '') {
      Alert.alert('Please enter language');
    } else {
      // Toast.show('success');
      var user = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        mobile_No: this.state.mobile_No,
        terms_condition: this.state.terms_condition,
        Birthdate: this.state.Birthdate,
        Language: this.state.Language

      };
      console.log('hi');

    }

  }

  render() {
    return (

      <View style={styles.VWcontainer}>

        <Header
          title={'REGISTER'}
          back={() => {
          this
            .props
            .navigation
            .goBack(null)
        }}/>

        <ScrollView contentContainerStyle={{
          width: window.width
        }}>
          <View style={styles.logoBg}>
            <Text style={styles.bigWhite}>LOLA</Text>
          </View>

          <View style={styles.ContainerBg}>
            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="firstname"
                onChangeText={(text) => this.setState({firstname: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="First Name"/>

              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="lastname"
                onChangeText={(text) => this.setState({lastname: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Last Name"/>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="mobile_No"
                onChangeText={(text) => this.setState({mobile_No: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                keyboardType='phone-pad'
                placeholder="Phone Number"/>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="email"
                onChangeText={(text) => this.setState({email: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                keyboardType='email-address'
                placeholder="Email"/>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="Password"
                onChangeText={(text) => this.setState({password: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                secureTextEntry={true}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Password"/>
              <View style ={styles.borderBg}></View>
            </View>
          
            <TouchableOpacity style={{height : 50,marginTop : 15}} onPress={this._showDateTimePicker}>
              <Text style={{marginLeft : 25,color : '#818285',fontSize : 20,marginBottom : 10,}}>{this.state.Birthdate}</Text>
              <View style ={styles.borderBg}></View>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}/>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="Gender"
                onChangeText={(text) => this.setState({gender: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Gender"/>
              <View style ={styles.borderBg}></View>
            </View>

            <View style={{
              alignItems: 'center'
            }}>
              <TextInput
                ref="Language"
                onChangeText={(text) => this.setState({Language: text})}
                style={styles.TxtIP}
                height={50}
                left={25}
                width={'100%'}
                underlineColorAndroid={'transparent'}
                placeholderTextColor='#818285'
                placeholder="Language"/>
              <View style ={styles.borderBg}></View>
            </View>
          </View>

          <View
            style={{
            flexDirection: 'row',
            marginTop: 10,
            width: '80%',
            marginLeft: 40
          }}>

            <CheckBox
              label=''
              checked={this.state.terms_condition}
              onChange={(checked) => {
                if(this.state.terms_condition === false){
                  this.setState({terms_condition : true})
                }else{
                  this.setState({terms_condition : false})
                }
              }}/>

            <Text
              style={{
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
              marginTop: 4
            }}>I Accept the</Text>
            <Text
              style={{
              marginTop: 4,
              marginLeft: 2
            }}>Terms and Conditions</Text>

          </View>

          <TouchableOpacity
            onPress={() => this.registerCall()}
            style={styles.BtnContainer}>
            <Text style={styles.BtnTxt}>REGISTER</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>

    );
  }
}
