import React from 'react';
import {StyleSheet, View, Text,TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


export default function User({ navigation}){
    const pressHandler = () => {
        navigation.navigate('Phone');

    }


    return(
        <View style={{left: 20, right: 20 }}> 
            <Text style={{paddingTop: 40}}>Enter your Information</Text>
           
        <TextInput
            style={styles.input}
            placeholder='First name (required)'
            />
  
             <TextInput
            style={styles.input1}
            placeholder='Last name (required)'
            />
        <TextInput
            style={styles.input2}
            placeholder='Username (required)'
            />
            
            <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:50,
       height:50,
       backgroundColor:'green',
       borderRadius:50/2,
       left: 280,
       
       
       
       
    
     }}
 >
   <Icon name="keyboard-arrow-right"  size={30} color="white" onPress={pressHandler}/>
 </TouchableOpacity>
        
    </View>
)
}
const styles = StyleSheet.create({

titleText: {
    backgroundColor: 'green',
    borderColor:"green",

},
input:{
    paddingTop: 30,
    borderBottomWidth:1,
    borderColor:"green"

},
input1:{
    paddingTop: 20,
    borderBottomWidth:1,
    borderColor:"green"
},
input2:{
    paddingTop: 20,
    borderBottomWidth:1,
    borderColor:"green"
}
});
  