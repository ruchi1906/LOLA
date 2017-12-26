import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Alert,
    TextInput,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles/Loginstyles';
import Icon from 'react-native-vector-icons/FontAwesome';

let validators = require('../../lib/validators').validators();

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.loginCall = this
            .loginCall
            .bind(this);
        this.state = {
            email: '',
            password: '',
            loading: false,
            login1: {}
        }
    }
    loginCall() {

        if (this.state.email === '') {
            Alert.alert('Enter a valid mail or number');
         } else if (this.state.password === undefined || (!validators.RegularExpressionPassword(this.state.password))) {
           Alert.alert("Your password should contain \n Minimum 7 characters including atleast 1 number");
         } else {
           this.setState({
               loading: true,
               email : '',
               password : '',
            });

           Alert.alert('Login successful');
           

         }

       

    }

    OpenRegister(){
        this.props.navigation.navigate('Register');
    }

    render() {

        return (

            <View style={styles.VWcontainer}>
                <ScrollView contentContainerStyle={{
                    width: window.width
                }}>
                    <View style={styles.SWcontainer123}>
                        <View style = {styles.logoBg}>
                        <Text style={styles.bigWhite}>LOLA</Text>
                        </View>

                        <View style={styles.TxtIPBorder} marginTop={80}>
                            <Icon
                                name="envelope"
                                size={20}
                                style={{
                                marginLeft: 10
                            }}
                                color="#818285"/>
                            <TextInput
                                onChangeText={(text) => this.setState({email: text})}
                                ref="email"
                                style={styles.TxtIP}
                                height={50}
                                left={25}
                                width={'80%'}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor='#818285'
                                placeholder="Email or Mobile Number"/>
                        </View>
                        <View style={styles.TxtIPBorder}>
                            <Icon
                                name="lock"
                                size={20}
                                style={{
                                marginLeft: 10
                            }}
                                color="#818285"/>
                            <TextInput
                                style={styles.TxtIP}
                                onChangeText={(text) => this.setState({password: text})}
                                ref="password"
                                height={50}
                                left={25}
                                secureTextEntry={true}
                                width={'80%'}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor='#818285'                              
                                placeholder="Password"/>
                        </View>

                        <TouchableOpacity
                        onPress = {()=>{this.props.navigation.navigate('ForgotPassword')}}
                            style={{
                            alignItems: 'center',
                            height: 25
                        }}>
                            <Text style={styles.TxtFont}>Forgot Password ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress = {()=> this.loginCall()}
                            style={styles.BtnContainer}>
                            <Text style={styles.BtnTxt}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress = {()=>{this.OpenRegister()}}
                            style={{
                            alignItems: 'center',
                            height: 25,
                            marginTop: 15
                        }}>
                            <Text style={styles.TxtFont}>Register</Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>
            </View>

        );
    }
}
