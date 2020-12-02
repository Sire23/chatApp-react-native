import React from 'react';
import {globalStyles} from '../styles/global';
import {View,Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OTPInputView from '@twotalltotems/react-native-otp-input';





export default function PhoneVerification({navigation})
{
    const pressHandler = () => {
        navigation.navigate('Convo',{item: 78});

    }
    return(
        <View style={globalStyles.container}>
          <Image  style={styles.image} source={require('../img/qr.png')}/>
          <Text>We've sent an SMS with an activation code to your</Text>
          <Text></Text>
            <OTPInputView
    style={{width: '80%', height: 100}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
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
       borderRadius:50,
       left: 250,
       top: 70

       
       
    
     }}
 >
   <Icon name="keyboard-arrow-right"  size={30} color="white" onPress={pressHandler}/>
 </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
    image: {
      alignItems: 'center',
      alignContent: 'center',
      
      left: 45
    }
  });
  
  