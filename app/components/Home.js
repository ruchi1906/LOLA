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
import DrawerHeader from '../common/drawer_header';
import styles from '../styles/Homestyles';

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            UserId : this.props.UserId,
        }
    }

componentDidMount(newProps){
    console.log('newProps' +JSON.stringify(newProps));
    this.setState({
        //UserId : newProps.UserId
    })
}

    render() {
        console.log('came' +this.props.UserId);
        return (

            <View style={{
                flex: 1
            }}>

                <DrawerHeader
                    title={'HOME'}
                    back={() => {
                    this
                        .props
                        .navigation
                        .navigate("DrawerOpen")
                }}/>

                <ScrollView
                    contentContainerStyle={{
                    width: window.width
                }}>

{parseInt(this.props.UserId) !== 0
            ?   
            <View>


                    <TouchableOpacity 
                        onPress = {()=>{this.props.navigation.navigate('NeedHelp')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="exclamation-circle"></Icon>
                        <Text style={styles.txtlbl}>I Need Help</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                             onPress = {()=>{this.props.navigation.navigate('AskLola')}}
                            style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="question-circle"></Icon>
                        <Text style={styles.txtlbl}>Ask Lola</Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                         onPress = {()=>{this.props.navigation.navigate('MyLola')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="female"></Icon>
                        <Text style={styles.txtlbl}>My Lola</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                         onPress = {()=>{this.props.navigation.navigate('PlayNow')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="play-circle"></Icon>
                        <Text style={styles.txtlbl}>Play Now</Text>
                    </TouchableOpacity>

                </View>
            
            :            <View>

                    <TouchableOpacity 
                          onPress = {()=>{this.props.navigation.navigate('NeedHelp')}}                          
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="exclamation-circle"></Icon>
                        <Text style={styles.txtlbl}>I Need Help</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                          onPress = {()=>{this.props.navigation.navigate('AskLola')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="question-circle"></Icon>
                        <Text style={styles.txtlbl}>Ask Lola</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                         onPress = {()=>{this.props.navigation.navigate('AboutLola')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="info-circle"></Icon>
                        <Text style={styles.txtlbl}>About Lola</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress = {()=>{this.props.navigation.navigate('ForLolaGuardian')}}
                        style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="female"></Icon>
                        <Text style={styles.txtlbl}>{"For Lola's Guardian"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = {()=>{this.props.navigation.navigate('Login')}}
                    style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="key"></Icon>
                        <Text style={styles.txtlbl}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                     onPress = {()=>{this.props.navigation.navigate('Register')}}
                    style={styles.vwContainer}>
                        <Icon style={styles.Icon} name="user-circle-o"></Icon>
                        <Text style={styles.txtlbl}>Register</Text>
                    </TouchableOpacity>
                
                    </View>

}

                </ScrollView>

            </View>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state:' + JSON.stringify(state));
    return {UserId: state.UserData_red.UserId}
}

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Home);
