import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default function EditUserName(props){
    
    const username = props.navigation.getParam("username");
    
    return(
        <View>
            <Text style={{color: 'green', }}>Username</Text>

            <TextInput style={{ borderBottomWidth: 1, borderColor: 'green'}}>
                     {username}
            </TextInput>

            <View>
                <Text style={{width: 315,height: 100, left: 22, fontSize: 16, lineHeight: 19, top: 20,color: '#000000'}}>
                Other people will be able to find you by this username and contact you without knowing your phone number.
                            You can use a-z, 0-9 and underscores.
                </Text>
            </View>
        </View>

    )
}