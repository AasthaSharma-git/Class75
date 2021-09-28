import React from 'react';
import { StyleSheet,Text,View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default class Login extends React.Component{
   constructor(){
       super();
       this.state={
           email:'',
           password:''
       }
   }

   login=async (email,password)=>{
      
       if(email&&password){
       
           try{
            const response= await firebase.auth().signInWithEmailAndPassword(email,password)
              if(response){
                this.props.navigation.navigate('Transaction')
              }
              
           }
           catch(error){
               console.log('Executed')
              switch (error.code){
                  case 'auth/user-not-found':
                      alert('User does not exist!');
                      console.log('User not found')
                      break;
                  case 'auth/invalid-email':
                      alert('Inavlid Email!');
                      console.log('Invalid Email')
                      break;
              }
           }
       }
       else{
           alert('Enter Email and Password!')
       }
   }


    render(){
        return(
            <View>
                <Text style={styles.text}>Login </Text>
              <TextInput placeholder="email-id" 
              keyboardType="email-address"
              onChangeText={(input)=>{
                  this.setState({email:input})
              }}
              style={styles.input}></TextInput>
              <TextInput placeholder="password" 
              secureTextEntry={true}
              onChangeText={(input)=>{
                  this.setState({password:input})
              }}
              style={styles.input}></TextInput>

              <View style={styles.container}>
                  <TouchableOpacity onPress={()=>this.login(this.state.email,this.state.password)}>
                      <Text>Submit</Text>
                  </TouchableOpacity>
              </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({

    text:{
      marginTop:100,
      alignSelf:'center',
      fontSize:50

    },
input:{
    borderWidth:2,
    borderColor:'black',
    marginTop:50,
    backgroundColor:'grey',
    alignSelf:'center',
    width:300

},
container:{
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'lightblue',
    alignSelf:'center',
    marginTop:100,
    width:100,
    height:30,
    alignItems:'center'
}
})