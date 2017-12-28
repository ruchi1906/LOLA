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
import styles from '../../styles/AboutLolastyles';

class TermsandConditions extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {}
    }

    componentDidMount(newProps) {}

    render() {
        return (

            <View style={{
                flex: 1
            }}>

                <InnerHeader
                    title={'TERMS & CONDITIONS'}
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
                        <Text style={styles.txtNeedHelp}>{"TERMS & CONDITIONS"}</Text>
                    </View>

                    <View style={styles.ContainerBg}>

                        <Text style={styles.txtEmergency}>{"TERMS & CONDITIONS"}
                        </Text>

                        <Text
                            style={{
                            marginLeft: 20,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                            marginBottom: 20
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>

                    </View>

                </ScrollView>

            </View>

        );
    }
}

export default TermsandConditions;
