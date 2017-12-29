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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import InnerHeader from '../../common/innerHeader';
import styles from '../../styles/NeedHelpstyles';
import Communications from 'react-native-communications';
import Loader from '../../common/Loader';

class NeedHelp extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            json: [],
            loading : false,

        }
    }

    componentDidMount(newProps) {
        this.getNeedHelp();

    }

    getNeedHelp = () =>{
        this.setState({loading: true});

        const url = 'http://lets-dev-api-002.azurewebsites.net/api/Lola/GetINeedHelp';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    "latitude": 0,
                    "longitude": 0,
                    "userID": ""
                    })
            })
            .then(response => response.json())
            .then(res => {

                console.log(JSON.stringify(res));

                this.setState({
                    json: res,
                    loading: false,
                });
            })
            .catch(error => {
                console.log('error:' + (error));
                this.setState({error, loading: false});
            });
    }

    render() {
        return (

            <View style={{
                flex: 1
            }}>

                <Loader
                            visible = {this.state.loading}
                            top = {40}
                            />

                <InnerHeader
                    title={'I NEED HELP'}
                    barIcon={() => {
                    this
                        .props
                        .navigation
                        .navigate("DrawerOpen")
                }}
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

                    <View style={styles.NeedHelpbar}>
                        <Text style={styles.txtNeedHelp}>I Need Help</Text>
                    </View>

                    <View style={styles.ContainerBg}>

                        <Text style={styles.txtEmergency}>If you had an emergency, here are some emergency services in your area
                        </Text>

                        {this
                            .state
                            .json
                            .map(function (item, i) {
                                return (
                                    <View 
                                    key = {i}
                                    style={styles.cardBg}>
                                        <View
                                            style={{
                                            width: '70%'
                                        }}>
                                            <Text style={styles.txtService}>{item.knownAs}</Text>
                                            <Text style={styles.txtService}>{item.phoneNumber}</Text>
                                        </View>

                                        <TouchableOpacity
                                            onPress=
                                            {()=>{ Communications.phonecall(item.phoneNumber, true); }}
                                            style={{
                                            width: '30%'
                                        }}>
                                            <Icon color="#A7A9AC" size={80} name="phone-square"/>
                                        </TouchableOpacity>

                                    </View>

                                )
                            })
}

                    </View>

                </ScrollView>

            </View>

        );
    }
}

export default NeedHelp;
