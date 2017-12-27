import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    ActivityIndicator,Alert,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles/Registerstyles';
//import { CheckBox } from 'react-native-elements'
import Header from '../../common/header';
import CheckBox from 'react-native-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

let validators = require('../../lib/validators').validators();

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            loading : false
        }
    }

    resetPassword(){

        if (this.state.email === '') {
            Alert.alert('Enter a valid mail or number');
         }else{
                this.setState({loading:true});
            const url = 'http://lets-dev-api-002.azurewebsites.net/api/Users/ForgotPassword';
            
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                                body: JSON.stringify({                                  
                                  "emailAddress": this.state.email,                 
                                })
                            })
                            .then(response => response.json())
                            .then(res => {
            
                                Alert.alert(res.message);
                                this.setState({loading:false});
            
                                // AsyncStorage.setItem('@UserId:key', res.cusId);
                            })
                            .catch(error => {
                                this.setState({loading: false});
                                console.log('error:' + (error));
            
                            });
           
         }

    }

    render() {
        return (

            <View style={styles.VWcontainer}>

                <Header
                    title={'RESET MY PASSWORD'}
                    back={() => {
                    this
                        .props
                        .navigation
                        .goBack(null)
                }}/>

                <ScrollView
                    contentContainerStyle={{
                    width: window.width
                }}>
                    <View style={styles.logoBg}>
                        <Text style={styles.bigWhite}>LOLA</Text>
                    </View>
                    <View style={styles.SWcontainer123}>
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
                            ref="username"
                            style={styles.TxtIP}
                            height={50}
                            left={25}
                            width={'80%'}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor='#818285'
                            placeholder="Email or Mobile Number"/>
                    </View>

                    </View>

                    <TouchableOpacity  onPress = {()=> this.resetPassword()} style={styles.BtnContainer}>
                        <Text style={styles.BtnTxt}>RESET PASSWORD</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

        );
    }
}
