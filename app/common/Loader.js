import React from 'react';
import {
    Image,
    View,
    Text,Dimensions,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const window = Dimensions.get("window");

const Loader = (props) => {

    console.log('HeaderProps:' + JSON.stringify(props));
    if(props.visible == true){

        return (
            
    
            <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                backgroundColor : '#ffffff',
                top: props.top,
                zIndex : 10,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
    
             <ActivityIndicator
                    animating={true}
                    style={{                   
                    marginTop: '60%',
                    zIndex: 10
                }}
                    size="large"/>
    
                {/* <Image style = {{marginTop : '1%'}} source={require('../assets/images/loading.gif')}></Image>
     */}
                <Text style = {{marginTop : '10%'}}>{'Please wait...'}</Text>
    
            </View>
        );

    }else{
        return(null);
    }
 
}

export default Loader;
