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
import Loader from '../../common/Loader';

class AboutLola extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            loading : false,
            data : '',
        }
    }

    componentDidMount(newProps) {
        this.getAboutlola();

    }

    getAboutlola = () =>{
        const url = `http://lets-dev-api-002.azurewebsites.net/api/Lola/GetContentAbout`;
        console.log(url);
        this.setState({loading: true});

        fetch(url)
            .then(response => response.json())
            .then(res => {

                this.setState({
                    data: res.description,
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
                    title={'ABOUT LOLA'}
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
                        <Text style={styles.txtNeedHelp}>About Lola</Text>
                    </View>

                    <View style={styles.ContainerBg}>

                        <Text style={styles.txtEmergency}>About Lola
                        </Text>

                        <Text
                            style={{
                            marginLeft: 20,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 20,
                            marginBottom: 20
                        }}>{this.state.data}</Text>

                    </View>

                </ScrollView>

            </View>

        );
    }
}

export default AboutLola;
