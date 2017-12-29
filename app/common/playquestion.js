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
import InnerHeader from './innerHeader';
import styles from '../../styles/PlayNowStyles';

class Playquestion extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            showStart: false
        }
    }

    componentDidMount(newProps) {}

    render() {
        return (

            <View style={{
                flex: 1
            }}>

                <InnerHeader
                    title={'PLAY NOW'}
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

                <View style={styles.ContainerBg}>

                    <Text style={styles.txtEmergency}>Here are some levels that you can complete
                    </Text>
                    <TouchableOpacity
                        onPress=
                        {()=>{this.setState({showStart : true})}}
                        style={styles.cardBg}>

                        <Text style={styles.lblGetToknow}>Get to Know me</Text>
                        <Icon
                            style={{
                            marginTop: 12
                        }}
                            name="adn"
                            size={18}/>
                        <Text style={styles.txtPoints}>5</Text>
                        <Text style={styles.txtearnPoints}>5/10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardBg}>

                        <Text style={styles.lblGetToknow}>Party Time</Text>
                        <Icon
                            style={{
                            marginTop: 12
                        }}
                            name="adn"
                            size={18}/>
                        <Text style={styles.txtPoints}>10</Text>
                        <Text style={styles.txtearnPoints}>0/10</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardBg}>

                        <Text style={styles.lblGetToknow}>Brave New World</Text>
                        <Icon
                            style={{
                            marginTop: 12
                        }}
                            name="adn"
                            size={18}/>
                        <Text style={styles.txtPoints}>15</Text>
                        <Text style={styles.txtearnPoints}>0/10</Text>
                    </TouchableOpacity>

                </View>

                {this.state.showStart === true
                    ? <View style={styles.ContainerBg}>

                            <Text style={styles.txtEmergency}>Lets Complete a Game Stage \n Get To know me - Worth 5 tokens
                            </Text>

                            <TouchableOpacity
                            style = {styles.btnStart}>

                                <Text
                                    style={{
                                    color: '#ffffff',
                                    fontSize : 20,
                                    marginTop : 5
                                }}>Start</Text>

                            </TouchableOpacity>

                        </View>
                    : null}

            </View>

        );
    }
}

export default Playquestion;
