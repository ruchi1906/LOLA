import React, { Component } from "react";
import {Dimensions} from 'react-native';
import SideBar from "../components/Menu/LeftMenu";
import { DrawerNavigator } from "react-navigation";
import Home from '../components/Home';

const window = Dimensions.get('window');

const Drawer = DrawerNavigator(
  {
    
    Home: { screen: Home,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
  },  
  {drawerWidth:(window.width - 150),
    initialRouteName: 'Home',
    drawerPosition : "right",
    contentComponent: SideBar
  }
);
export default Drawer;

