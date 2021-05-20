

import React, { Component } from 'react';
// import Login from './Login'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Main from './Loginregistation/Main'
import Register from './Loginregistation/signup'
import Login from './Loginregistation/Login'
import Dashbord from './Loginregistation/Dashbord'
import Model from './Loginregistation/Model'
import Update from './Loginregistation/Update'

  const  App  =()=>{
    return(
        <Main/>
        // {/* <Login/> */}
        // {/* <Dashbord/> */}
        // <Update/>
        
    )
  }
  export default App
