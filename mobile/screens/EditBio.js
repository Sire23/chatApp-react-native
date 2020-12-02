import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default function EditBio(props){
    
    const bio = props.navigation.getParam("bio");
    
    return(
        <View>
            <Text style={{color: 'green', left: 17, width: 169, lineHeight: 21, height: 24, top: 40, fontSize: 18 }}>tell us about yourself</Text>

            <TextInput style={{ borderBottomWidth: 2, borderColor: 'green', top: 60, height: 100, width: 307, left: 19, fontSize: 15, justifyContent: 'center', alignItems:'center', textAlign: 'justify'}} multiline={true}>
                     {bio}
            </TextInput>

            <View>
                <Text style={{width: 315,height: 100, left: 22, fontSize: 16, lineHeight: 19, top: 80,color: '#000000'}}>
                Anyone who opens your profile will see this text.
                </Text>
            </View>
        </View>

    )
}