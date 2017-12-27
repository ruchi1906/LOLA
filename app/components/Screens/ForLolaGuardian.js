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
import styles from '../../styles/Homestyles';

class ForLolaGuardian extends Component {
    constructor(props) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
          
        }
    }

componentDidMount(newProps){
  
}

    render() {
         return (

            <View style={{
                flex: 1
            }}>

                <InnerHeader
                    title={"FOR LOLA'S GUARDIAN"}
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

               

            </View>

        );
    }
}


export default ForLolaGuardian;
