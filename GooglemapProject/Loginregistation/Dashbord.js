
import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

class Dashbord extends Component {
  constructor (props) {
    super();
    this.state = {
      users: [],
    }
       this.subscriber =
      firestore().collection( "users" ).onSnapshot( doc => {
        let users = []
        doc.forEach( doc => {
          users.push( { id: doc.id, name: doc.data().name, email: doc.data().email } )
        } );
        this.setState( { users } )
      } )

  }

  delete =async (id)=>{
    firestore()
  .collection('users')
  .doc(id)
  .delete()
  .then(() => {
    console.log('User deleted!');
  });
 
  }
  Edit = (id)=>{
   this.props.navigation.navigate('Update',{id:id})


  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>User Details</Text>
          {console.log( this.state.users )}
        </View>
        <View >

        <FlatList
          data={this.state.users}
          renderItem={( item ) =>
          <View style={styles.itemdata}>
          <Text style={styles.item}><FontAwesome5 name={'user'} />   {item.item.email}</Text>
          <Text onPress={()=>this.delete(item.item.id)} style={styles.itemIcon} ><FontAwesome5 name={'times'} size={20}/></Text>
          <Text onPress={()=>this.Edit(item.item.id)} style={styles.itemIcon}><FontAwesome5 name={'edit'} size={20}/></Text>
          
         </View> 
         }/>
         </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemIcon:{
    padding: 10,
    marginTop:10,
    marginLeft:3,
    marginRight:10,
    fontSize:50,

  },
  item: {
    padding: 10,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    width:230,
    fontSize:15,
    fontWeight:"700",
    
  },
  title: {
    fontSize: 32,
    textAlign:'center'
  },
  itemdata:{
    flexDirection:'row',
    borderBottomWidth:1,
    marginRight:10,
    marginLeft:10,

  }
} );

export default Dashbord;