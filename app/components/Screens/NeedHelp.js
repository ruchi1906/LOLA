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

class NeedHelp extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            json: [
                {
                    title: 'Ambulance Service',
                    No: '022 155 15865'
                }, {
                    title: 'Police Station',
                    No: '022 155 15865'
                }, {
                    title: 'Fire Bridage',
                    No: '022 155 15865'
                }
            ]

        }
    }

    componentDidMount(newProps) {}

    render() {
        return (

            <View style={{
                flex: 1
            }}>

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
                                            <Text style={styles.txtService}>{item.title}</Text>
                                            <Text style={styles.txtService}>{item.No}</Text>
                                        </View>

                                        <TouchableOpacity
                                            onPress=
                                            {()=>{ Communications.phonecall(item.No, true); }}
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
