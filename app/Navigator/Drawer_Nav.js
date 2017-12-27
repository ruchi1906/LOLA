import React, { Component } from "react";
import {Dimensions} from 'react-native';
import SideBar from "../components/Menu/LeftMenu";
import { DrawerNavigator } from "react-navigation";
import Home from '../components/Home';
import NeedHelp from '../components/Screens/NeedHelp';
import AboutLola from '../components/Screens/AboutLola';
import AskLola from '../components/Screens/AskLola';
import ForLolaGuardian from '../components/Screens/ForLolaGuardian';
import MyLola from '../components/Screens/MyLola';
import PlayNow from '../components/Screens/PlayNow';
import MyProfile from '../components/Menu/MyProfile';
import TermsandConditions from '../components/Menu/TermsandConditions';


const window = Dimensions.get('window');

const Drawer = DrawerNavigator(
  {
    
    Home: { screen: Home,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    NeedHelp: {
      screen: NeedHelp,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    AboutLola: {
      screen: AboutLola,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    AskLola: {
      screen: AskLola,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    ForLolaGuardian: {
      screen: ForLolaGuardian,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    MyLola: {
      screen: MyLola,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    PlayNow: {
      screen: PlayNow,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: () => ({
        drawerLockMode: 'locked-closed'
      }),
    },
    TermsandConditions: {
      screen: TermsandConditions,
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

