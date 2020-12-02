import React, {Component, useEffect, useState} from 'react';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import User from '../screens/user';
import Phone from '../screens/phone';
import PhoneVerification from '../screens/phoneVerification';
import Convo from '../screens/convo';
//import Chats from '../screens/chats';
import UserProfile from '../screens/userProfile';
import Conversation from '../screens/conversation';
import Chat from '../screens/chat';
import EditUserName from '../screens/EditUserName';
import EditBio from '../screens/EditBio';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon_menu from 'react-native-vector-icons/Entypo';
import { ToastAndroid, TouchableOpacity, Image, View } from 'react-native';

  
const screens = {
    Convo: {
        screen: Convo,
        navigationOptions: {
            title: 'Jatu Talk',
            headerTintColor: '#fff',
            
        }
        
    },
    Chat: {
        screen: Chat
    },
    EditUserName: {
        screen: EditUserName,
        navigationOptions: {
            title: 'Username',
            headerTintColor: '#fff',
            headerRight: (
                    <TouchableOpacity style={{right:10}} onPress={()=> ToastAndroid.show('Username Updated', ToastAndroid.SHORT)}>
                  <Icon name="checkmark-outline" color="#FFFFFF" size={30}/>
                  </TouchableOpacity>
              )
        }
    },
    EditBio: {
            screen: EditBio,
            navigationOptions: {
                title: 'Bio',
                headerTintColor: '#fff',
                headerRight: (
                        <TouchableOpacity style={{right:10}} onPress={()=> ToastAndroid.show('Bio Updated', ToastAndroid.SHORT)}>
                      <Icon name="checkmark-outline" color="#FFFFFF" size={30}/>
                      </TouchableOpacity>
                  )
            }
    },
    Phone: {
        screen: Phone,
        navigationOptions: {
            title: 'Your Phone',
            headerTintColor: '#fff',

        }
    },

    PhoneVerification: {
        screen: PhoneVerification,
        navigationOptions: {
            title: 'Phone Verification',
            headerTintColor: '#fff',
        }
    },
    
    
    UserProfile: {
        screen: UserProfile,
        navigationOptions: {
            header: null,
            //title: 'Profile',
            //headerTintColor: '#fff',
            //headerShown: false,
            headerRight: (
                <TouchableOpacity style={{right:10}}>
              <Icon_menu name="dots-three-vertical" color="#FFFFFF" size={20}/>
              </TouchableOpacity>
          )
           
        }
        
    },
    Conversation: {
        screen: Conversation,
        navigationOptions:{
            headerShown: false,
        }
        
// ({navigation})=>{

//             headerTitle:()=>{
//                 <MyHeader navigation={navigation}/>
//             }
        // navigationOptions: {
        //     title: 'chat',
        //     headerTintColor: '#fff',
        //     headerShown: false
        // }
        
    },
    Home: {
        screen: User,
        navigationOptions: {
            title: 'User Information',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: '#fff',
        }
    },
    
    
    
}
const UserStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'green', height: 60}
    }
});

export default createAppContainer(UserStack);


// class MyHeader extends React.Component{
//     render(){
//   const {navigation} = this.props;
//   const  user = navigation.getParam('user');
// return(
//     <View>
//         <Image source={{uri: `${user.dp}`}} />
//         <Text>
//             {user.name}
//         </Text>
//     </View>
// )
//     }
// }