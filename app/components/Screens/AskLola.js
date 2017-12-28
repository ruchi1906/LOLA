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
import styles from '../../styles/AskLolastyles';
import Communications from 'react-native-communications';

class AskLola extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            json: [
                {
                    title: 'Polokawale Clinic',
                    No: '022 155 15865'
                }, {
                    title: 'Soul Buddz',
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
                    title={'ASK LOLA'}
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

                    <View style={styles.txtSearchDb}>
                        <Text
                            style={{
                            marginLeft: 20
                        }}>You can search database at any time</Text>
                    </View>

                    <View style={styles.NeedHelpbar}>
                        <Text style={styles.txtNeedHelp}>Where Can I get Pregnancy Test?</Text>
                    </View>

                    <View style={styles.ContainerBg}>

                        <Text style={styles.txtEmergency}>Here is What I found
                        </Text>

                        <View style={styles.cardBg}>
                            <View
                                style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={styles.txtArticle}>Article</Text>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
                                    <Icon
                                        style={{
                                        marginTop: 5
                                    }}
                                        name="sign-in"
                                        color="#BABDBF"
                                        size={30}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vwSeparator}></View>
                            <Text style={styles.txtQuestion}>Where can I get a pregnancy test?</Text>

                        </View>

                        <View style={styles.cardBg}>
                            <View
                                style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={styles.txtArticle}>FAQ</Text>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Login")}}>
                                    <Icon
                                        style={{
                                        marginTop: 5
                                    }}
                                        name="sign-in"
                                        color="#BABDBF"
                                        size={30}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.vwSeparator}></View>
                            <Text style={styles.txtQuestion}>10 ways to get a pregnancy test.</Text>

                        </View>

                        <View style={styles.cardBg}>

                            <Text style={styles.txtArticle}>Service Providers near you:</Text>
                            <View style={styles.vwSeparator}></View>
                            {this
                                .state
                                .json
                                .map(function (item, i) {
                                    return (
                                        <View key={i} style = {{flexDirection : 'row'}}>
                                            <View
                                                style={{
                                                width: '73%'
                                            }}>
                                                <Text style={styles.txtService}>{item.title}</Text>
                                                <Text style={styles.txtService}>{item.No}</Text>
                                            </View>

                                            <TouchableOpacity
                                                onPress=
                                                {()=>{ Communications.phonecall(item.No, true); }}
                                                style={{
                                                width: '27%'
                                            }}>
                                                <Icon color="#A7A9AC" size={70} name="phone-square"/>
                                            </TouchableOpacity>

                                        </View>

                                    )
                                })
}
                        </View>

                    </View>

                </ScrollView>

                <View
                    style={{
                    marginBottom: 0,
                    borderTopColor: '#A7A9AC',
                    height: 65,
                    flexDirection: 'row',
                    backgroundColor: '#ffffff'
                }}>

                    <Icon style={styles.iconSearch} name="search" size={20}/>

                    <TextInput
                        placeholder="Type to Search"
                        underlineColorAndroid="transparent"
                        returnKeyType="search"
                        style={{
                        marginLeft: 10,
                        width: '70%'
                    }}></TextInput>

                </View>

            </View>

        );
    }
}

export default AskLola;
