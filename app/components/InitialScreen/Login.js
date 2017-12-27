import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Alert,
    TextInput,
    AsyncStorage,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../styles/Loginstyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../common/header';
import {NavigationActions} from 'react-navigation';
import {UserData} from '../../redux/actions/UserData_action';
let validators = require('../../lib/validators').validators();

class Login extends Component {
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
       // this.setState({loading: true});
        if (this.state.email === '') {
            Alert.alert('Enter a valid mail or number');
        } else if (this.state.password === undefined || this.state.password === '') { //(!validators.RegularExpressionPassword(this.state.password))) {
            Alert.alert("Your password should contain \n Minimum 7 characters including atleast 1 number");
        } else {
            this.setState({loading: true});
            const url = 'http://lets-dev-api-002.azurewebsites.net/api/authenticate';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify({emailAddressUsername: this.state.email, password: this.state.password})
                })
                .then(response => response.json())
                .then(res => {

                    console.log('reult' + JSON.stringify(res));
                    this.setState({loading: false});

                    AsyncStorage.setItem('@UserId:key', '1');

                    this
                        .props
                        .UserData('1');

                    this
                        .props
                        .navigation
                        .dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({routeName: 'Drawer'})]
                        }));
                })
                .catch(error => {
                    this.setState({loading: false});
                    console.log('error:' + (error));

                });

        }

    }

    OpenRegister() {
        this
            .props
            .navigation
            .navigate('Register');
    }

    render() {

        return (

            <View style={styles.VWcontainer}>

                <Header
                    title={'LOGIN'}
                    back={() => {
                    this
                        .props
                        .navigation
                        .goBack(null)
                }}/>

                <ActivityIndicator
                    ref='loader'
                    animating={this.state.loading}
                    style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: '60%',
                    zIndex : 10
                }}
                    size="large"/>

                <ScrollView
                    contentContainerStyle={{
                    width: window.width
                }}>
                    <View style={styles.SWcontainer123}>
                        <View style={styles.logoBg}>
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
                            onPress=
                            {()=>{this.props.navigation.navigate('ForgotPassword')}}
                            style={{
                            alignItems: 'center',
                            height: 25
                        }}>
                            <Text style={styles.TxtFont}>Forgot Password ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress= {()=> this.loginCall()} style={styles.BtnContainer}>
                            <Text style={styles.BtnTxt}>LOGIN</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress=
                            {()=>{this.OpenRegister()}}
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

const mapStateToProps = (state, ownProps) => {
    // console.log('state:' + JSON.stringify(state));
    return {}
}

const mapDispatchToProps = dispatch => (bindActionCreators({
    UserData
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Login);
