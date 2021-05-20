import auth from '@react-native-firebase/auth';
import firestore, { firebase } from '@react-native-firebase/firestore';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class Register extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      address: '',
      number: '',
    }

  }
  submit() {
    console.log( this.state )
    let email = this.state.email;
    let password = this.state.password
    auth()
      .createUserWithEmailAndPassword( email, password )
      .then( () => {
        alert( 'User account created' );
      } )
      .catch( error => {
        if ( error.code === 'auth/email-already-in-use' ) {
          alert( 'That email address is already in use!' );
        }

        if ( error.code === 'auth/invalid-email' ) {
          alert( 'That email address is invalid!' );
        }

        alert( error );
      } );


    let name = this.state.name;
    // let email = this.state.email;
    // let password = this.state.password;
    let cpassword = this.state.cpassword;
    let address = this.state.address;
    let number = this.state.number;
    // if ( this.state.email == "" && this.state.password == "") {
      firestore().collection( 'users' ).add( {
        name,
        email,
        password,
        cpassword,
        address,
        number
      } )
      // alert("user created !");
      this.props.navigation.navigate('Login')
    // }
    // else{
    //   alert("please Enter Data");
    // }
  }
  render() {
    return (
      <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
        {/* <View style={styles.container}> */}
        <View style={styles.maindiv}>
          {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}> */}
          <Text style={styles.signupstyle}>Sign Up</Text>
          <View style={styles.UserIcon}>
            <FontAwesome5 name={'user'} style={styles.useicon} />
            <TextInput style={styles.InutStyle} placeholder="Name"
              onChangeText={( text ) => { this.setState( { name: text } ) }}
            />
          </View>

          <View style={styles.UserIcon}>
            <FontAwesome5 name={'user'} style={styles.useicon} />
            <TextInput style={styles.InutStyle} placeholder="Email"
              onChangeText={( text ) => { this.setState( { email: text } ) }} />
          </View>

          <View style={styles.UserIcon}>
            <FontAwesome5 name={'lock'} style={styles.useicon} />
            <TextInput style={styles.InutStyle}
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={( text ) => { this.setState( { password: text } ) }}
            />
            <FontAwesome5 name={'eye-slash'} style={styles.useicon}
            />
          </View>


          <View style={styles.UserIcon}>
            <FontAwesome5 name={'lock'} style={styles.useicon} />
            <TextInput style={styles.InutStyle} placeholder="Confirm password"
              onChangeText={( text ) => { this.setState( { cpassword: text } ) }}
            />
            <FontAwesome5 name={'eye-slash'} style={styles.useicon} />
          </View>
          <View style={styles.UserIcon}>
            <FontAwesome5 name={'user'} style={styles.useicon} />
            <TextInput style={styles.InutStyle} placeholder="Address"
              onChangeText={( text ) => { this.setState( { address: text } ) }}
            />
          </View>
          <View style={styles.UserIcon}>
            <FontAwesome5 name={'user'} style={styles.useicon} />
            <TextInput style={styles.InutStyle} placeholder="Phone number"
              onChangeText={( text ) => { this.setState( { number: text } ) }}
            />
          </View>


          <Text style={styles.signupbtn} onPress={() => { this.submit() }}>Sign up</Text>
          <Text style={styles.Loginwith}>or login with</Text>
          <View style={styles.mediaIcon}>
            <FontAwesome5 name={'facebook'} color="blue" size={50} style={{ paddingLeft: 20 }} />
            <FontAwesome5 name={'google'} color="red" size={50} style={{ paddingLeft: 20 }} />
          </View>
          <Text style={styles.Link}>Already have account? <Text style={{ fontWeight: "700", color: "black" }}>Login</Text></Text>
          {/* </ScrollView> */}

        </View>

        {/* </View> */}
      </KeyboardAwareScrollView>


    )
  }
}
const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#203aa1',

  }, maindiv: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 550,
    // flex:1,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 170,
    color: "#999999",
  },
  signupstyle: {
    textAlign: "center",
    // paddingTop: 10,
    fontSize: 20,
    fontWeight: "700",
    // marginTop:5,
  },
  InutStyle: {
    // paddingTop: 20,
    flex: 1,
    paddingLeft: 10,
    marginLeft: 10,
    // marginTop:10,
    // borderWidth:1,
    // bottom:KeyboardAwareScrollView
  },
  signupbtn: {
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    backgroundColor: "#8f8f8f",
    borderRadius: 30,
    width: 100,
    marginLeft: 111,
    color: "#fff",
    // justifyContent:"center"
  },
  useicon: {
    paddingLeft: 10,
    // flexDirection:"row",

  }, UserIcon: {
    flexDirection: "row",
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  Loginwith: {
    marginTop: 10,
    textAlign: 'center',
    color: "#8f8f8f",
  }, mediaIcon: {
    flexDirection: 'row',
    // paddingLeft:50,
    marginTop: 15,
    justifyContent: 'center',
  },
  Link: {
    marginTop: 15,
    textAlign: 'center',
    color: "#8f8f8f",
  }
} )

export default Register;
