import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Phone({navigation}){
  const pressHandler = () => {

    navigation.navigate('PhoneVerification');


}
  return (
    <View style={styles.container}>
      <View >
      
      <Text style={{ borderBottomWidth:1,borderColor:"green", padding: 20}}>Tanzania</Text>
      <View style={{ flexDirection: 'row'}}>
      <Text style={{ 
        fontSize: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        top: 40,
        width: 50
      }}>+255</Text>
        <TextInput keyboardType="numeric" style={{ borderBottomWidth:1,
      borderColor:"green",
      top: 40,
    width:250,
  left: 3 }}
        placeholder='enter your number' />
        </View>
        </View>

              <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:50,
            height:50,
            backgroundColor:'green',
            borderRadius:50,
            left: 250,
            top: 400

          }}
      >
        <Icon name="keyboard-arrow-right"  size={30} color="white" onPress={pressHandler}/>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
      container: {
       padding: 24,
      
  }
        
     });

  
