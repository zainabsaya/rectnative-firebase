import React, { Component,useEffect,useState } from 'react';
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

  
  function Login() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
  }
  export default Login