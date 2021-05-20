import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React,{ Component } from 'react';
import {View,Button} from 'react-native'

GoogleSignin.configure({
    webClientId: '455977607791-jn6f89u7u3pcipisdp1kaqdtgdk6l0s9.apps.googleusercontent.com',
  });
class GoogleSign extends Component{
    
    onGoogleButtonPress =async()=> {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }

render(){
    return(
        <View>
        <Button
        title="Google Sign-In"
        onPress={() =>this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      />
      </View>
    )
}

}
 export default GoogleSign