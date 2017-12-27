import React, { Component } from 'react';
import {Platform, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios')
      ? 70
      : 50,
    width: '100%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // borderColor : "yellow",     borderWidth : 1,
  },
  Titlecontainer: {
    width: '70%',
    marginLeft: '15%',
    alignItems: 'center'
  },
  Backcontainer: {
    width: '15%',
    alignItems: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#818285'
  },
  TxtIP: {
    fontSize: 20,
    marginTop: 5,
    //top : 3,
    alignItems: 'center',
    // fontWeight: 'bold', top:10,
    color: '#818285'
  }
});

class DrawerHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
     

  };
  }

  render() {
  return (
    <View style={styles.container}>    
      <View style={styles.Titlecontainer}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>       
      </View>  
      <TouchableOpacity style={styles.Backcontainer} onPress={this.props.back}>
        <Icon name="align-right" style={styles.TxtIP} color="#818285"/>
        </TouchableOpacity>   
    </View>
  );
}
}


export default (DrawerHeader);


