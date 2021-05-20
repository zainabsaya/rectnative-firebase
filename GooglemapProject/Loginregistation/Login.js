
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TextInput,  KeyboardAvoidingView,
 
 } from 'react-native';
 
 import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
 import firestore, { firebase } from '@react-native-firebase/firestore';
 import auth from '@react-native-firebase/auth'
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  
class Login extends Component{
  constructor(){
    super();
    this.state ={
      email:'',
      password:'',
    }
  }
  submit(){
    console.log(this.state);
    let email = this.state.email;
    let password = this.state.password
     auth()
      .signInWithEmailAndPassword( email, password )
      .then( () => {
        alert( ' signed in!' );
        this.props.navigation.navigate('Dashbord')
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


  }
   render(){
   return (
     <KeyboardAwareScrollView style={styles.container}>

     <View style={styles.maindiv}>

     <Text style={styles.signupstyle}>Login</Text> 

     <View style={styles.UserIcon}>     
     <FontAwesome5 name={'user'} style={styles.useicon}/>
     <TextInput
      style={styles.InutStyle} 
      placeholder="Email"
      onChangeText={( text ) => { this.setState( { email: text } ) }}
      />
     </View>
 
     <View style={styles.UserIcon}>
     <FontAwesome5 name={'unlock'} style={styles.useicon}/>
     <TextInput 
     style={styles.InutStyle} 
     placeholder="Enter Password"
     onChangeText={( text ) => { this.setState( { password: text } ) }}
     />
     <FontAwesome5 name={'eye-slash'} style={styles.useicon}/>
     </View>

     <View style={styles.ForgotLink}>
     <Text style={{color:"#203aa1"}}>Forgot password?</Text>
     </View>
         <Text 
         style={styles.signupbtn}
         onPress={()=>{this.submit()}}
         >Login</Text>
         <Text style={styles.Loginwith}>or login with</Text>
         <View style={styles.mediaIcon}>
         <FontAwesome5 name={'facebook'} color="blue" size={50} style={{paddingLeft:20}}/>
         <FontAwesome5 name={'google'} color="red" size={50} style={{paddingLeft:20}}/>
         </View>
         
         <Text style={styles.Link}>Already have account? <Text style={{fontWeight:"700",color:"black"}}>Login</Text></Text>
       </View>
 
     </KeyboardAwareScrollView>
   )
}
 }
 const styles = StyleSheet.create( {
   container: {
     backgroundColor:'#203aa1',
     height:250,
    
   },maindiv:{
     justifyContent:"center",
     backgroundColor:"#ffffff",
     borderWidth:0,
     borderTopLeftRadius:40,
     borderTopRightRadius:40,
     height:500,
     // flex:1,
     paddingLeft:30,
     paddingRight:30,
     marginTop:220,
 color:"#999999",
   },
   signupstyle:{
       textAlign:"center",
       paddingTop:10,
       fontSize:25,
       fontWeight:"700",
   },
   InutStyle:{
       paddingTop:10,
       flex: 1,
       paddingLeft:10,
       marginLeft:10,
       
 
   },signupbtn :{
     textAlign:"center",
     padding:10,
     marginTop:15,
     backgroundColor:"#8f8f8f",
     borderRadius:30,
     width:100,
     marginLeft:111,
     color:"#fff",
     // justifyContent:"center"
   },
   useicon:{
     paddingLeft:10,
     // flexDirection:"row",
 
   },UserIcon:{
     flexDirection:"row",
     alignItems: 'center',
     borderBottomWidth:1,
   },
   Loginwith:{
     marginTop:10,
     textAlign:'center',
     color:"#8f8f8f",
   },mediaIcon:{
     flexDirection:'row',
     // paddingLeft:50,
     marginTop:15,
     justifyContent:'center',
   },
   Link:{
     marginTop:15,
       textAlign:'center',
       color:"#8f8f8f",
   },
   ForgotLink:{
     marginTop:10,
   paddingLeft:5,
   }
 } )
 
 export default Login;
 