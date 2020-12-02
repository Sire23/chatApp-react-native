import React from 'react';
import { useState } from 'react';
import {globalStyles} from '../styles/global';
import {StyleSheet,TextInput,Text, TouchableOpacity,View,Image, ScrollView } from 'react-native';
///import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';


export default function Convo()
{
    
    return(
        <View style={globalStyles.container}>
            <ScrollView>
            <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/download.png')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/gm.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/images.png')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/gm.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/images.png')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        <Text style={styles.text}>
          <Image source={require('../img/ceo.jpg')} style={styles.image}/>
          Hello people!
        </Text>
        </ScrollView>
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
       left: 280,
       
       
    
     }}
 >
   <Icon name="plus"  size={30} color="#01a699" color="white" />
 </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 50,
      backgroundColor: '#f6f7f8',
    },
    image: {
      width: 80,
      height: 80,
    borderRadius: 80/2
    }
});