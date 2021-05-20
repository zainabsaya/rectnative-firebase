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
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'



class Update extends React.Component {
    constructor () {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            address: '',
            number: '',
            users: [],
        }

        this.subscriber =

            firestore().collection( "users" ).onSnapshot( doc => {
                let users = []
                let id = this.props.route.params.id;
                console.log( id );
                doc.forEach( doc => {
                    if ( doc.id == id )
                        users.push( { "id": doc.id, "name": doc.data().name, "email": doc.data().email, "password": doc.data().password, "Address": doc.data().address, "Phonenumber": doc.data().number } )
                } );
                this.setState( { users } )
                // console.log( users )
            } )



    }

    submit() {
        console.log( this.state.name)
        let name= this.state.name;
        let email = this.state.email;
        let address = this.state.address;
        let number = this.state.number;
        let password = this.state.password;
            firestore()
                .collection( 'users' )
                .doc( '7B96UtZuplakxFQY8NNy' )
                .update( {
                    name:name,
                    email:email,
                    password:password,
                    address:address,
                    number:number,
                } )
                .then( () => {
                    console.log( 'User updated!' );
                } );

    }
    render() {
        return (

            <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>

                {/* <View style={styles.container}> */}
                <View style={styles.maindiv}>
                    {/* <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}> */}

                    <Text style={styles.signupstyle}>User Detail</Text>
                    {
                        this.state.users.map( ( val, index ) =>
                       
                            <View key="index">
                                <View style={styles.UserIcon}>
                                    <FontAwesome5 name={'user'} style={styles.useicon} />
                                    <TextInput style={styles.InutStyle} placeholder="Name"
                                        defaultValue={val.name}
                                        onChangeText={(text) => { this.setState( { name: text } ) }}
                                    />
                                </View>
                                <View style={styles.UserIcon}>
                                    <FontAwesome5 name={'user'} style={styles.useicon} />
                                    <TextInput style={styles.InutStyle} placeholder="Email"
                                        defaultValue={val.email}
                                        onChangeText={( text ) => { this.setState( { email: text } ) }} />
                                </View>
                                <View style={styles.UserIcon}>
                                    <FontAwesome5 name={'lock'} style={styles.useicon} />
                                    <TextInput style={styles.InutStyle}
                                        placeholder="Enter Password"
                                        secureTextEntry={true}
                                        defaultValue={val.password}
                                        onChangeText={( text ) => { this.setState( { password: text } ) }}
                                    />
                                    <FontAwesome5 name={'eye-slash'} style={styles.useicon}
                                    />
                                </View>
                                <View style={styles.UserIcon}>
                                    <FontAwesome5 name={'user'} style={styles.useicon} />
                                    <TextInput style={styles.InutStyle} placeholder="Address"
                                        defaultValue={val.Address}
                                        onChangeText={( text ) => { this.setState( { address: text } ) }}
                                    />
                                </View>
                                <View style={styles.UserIcon}>
                                    <FontAwesome5 name={'user'} style={styles.useicon} />
                                    <TextInput style={styles.InutStyle} placeholder="Phone number"
                                        defaultValue={val.Phonenumber}
                                        onChangeText={( text ) => { this.setState( { number: text } ) }}
                                    />
                                </View>

                            </View>
                        )
                    }
                    <Text style={styles.signupbtn} onPress={() => { this.submit() }}>Update</Text>
                    {/* <Text style={styles.Loginwith}>or login with</Text> */}
                    <View style={styles.mediaIcon}>
                        <FontAwesome5 name={'facebook'} color="blue" size={50} style={{ paddingLeft: 20 }} />
                        <FontAwesome5 name={'google'} color="red" size={50} style={{ paddingLeft: 20 }} />
                    </View>
                    {/* <Text style={styles.Link}>Already have account? <Text style={{ fontWeight: "700", color: "black" }}>Login</Text></Text> */}
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
    },
    mediaIcon: {
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
export default Update;