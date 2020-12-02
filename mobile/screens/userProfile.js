import  React, { Component,useEffect,useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    
  } from 'react-native';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/EvilIcons';
import Iconp from 'react-native-vector-icons/Feather';
import Group from 'react-native-vector-icons/FontAwesome';
import  Help  from 'react-native-vector-icons/EvilIcons';


function UserProfile(props, {navigation}) {
    
    const [user, setUser] = useState('');
    const x = props.navigation.getParam();

    useEffect(() => {
        setUser(props.navigation.getParam('user'));
    })
    //console.log("my user",user.dp);

        //console.log("my convo",props.randomConvo.selectedUser.dp);
       
        return (
            <View>
              <ScrollView>
                
                <View>
                          <ImageBackground source={{ uri: `${user.dp}`}} style={{  width: 360,
                        height: 311 }}>
                        <Text
                  style={{
                    width: 350,
                  height: 30,
                  left: 17,
                    fontWeight: 'normal',
                    fontSize: 26,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 50,
                    lineHeight: 30 // position where you want
                   
                  }}
                >{user.name}</Text>
                <Text style={{
                    width: 100,
                  height: 21,
                  left: 17,
                    fontSize: 18,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 20,
                    lineHeight: 21
                     // position where you want
                   
                  }}>Online</Text>
                        </ImageBackground>
        </View>
            <Text style={{color: 'green', left: 17, fontSize: 18 }}>Personal Information </Text>
            <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, top: 20}}>
            <Text style={{width: 197, fontSize:16, width:250, lineHeight: 19 }}>{user.email}</Text>
            <Text style={{fontSize: 14, color: '#AEB5BC'}}>email</Text>
            </View>
              <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17,height: 90, top: 20}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('EditUserName',{username:user.username})}>
            <Text style={{width: 97}}>@{user.username}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 14, color: '#AEB5BC'}}>username</Text>
            </View>
            <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17,height: 90, top: 20}}>
              <TouchableOpacity onPress={() => props.navigation.navigate('EditBio', {bio: user.bio})}>
            <Text style={{width: 330}}>{user.bio}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 14, color: '#AEB5BC'}}>Bio</Text>
            </View>

            <View style={{ bottom: 10, top: 20}}>
            <Text style={{color: 'green', left: 17, fontSize: 18, top: 20 }}>Settings </Text>
            <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, flexDirection: 'row', top: 20}}>
            

  <Text style={{width: 50}}>
    <Icon name="user" color="black" size={50}/>
  </Text>
    <Text style={{width:100,top: 15, left: 50, fontSize: 16, lineHeight: 19}}>My Account</Text>
            </View>
              
            <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, flexDirection: 'row', top: 30}}>
            

            <Text style={{width: 50}}>
              <Iconp name="phone" color="black" size={40}/>
            </Text>
              <Text style={{width:150,top: 15, left: 50, fontSize: 16, lineHeight: 19}}>Call for Support </Text>
                      </View>

                      <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, flexDirection: 'row', top: 30}}>
            

            <Text style={{width: 50, top: 10}}>
              <Group name="group" color="black" size={40}/>
            </Text>
              <Text style={{width:150,top: 15, left: 50, fontSize: 16, lineHeight: 19}}>Invite a friend </Text>
                      </View>

                      <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, flexDirection: 'row', top: 30}}>
            

            <Text style={{width: 50, top: 10}}>
              <Help name="question" color="black" size={40}/>
            </Text>
              <Text style={{width:150,top: 15, left: 50, fontSize: 16, lineHeight: 19}}>Help </Text>
                      </View>


                      <View style={{borderBottomWidth: 1, borderColor: '#DFD8C8', left: 17, height: 90, flexDirection: 'row', top: 30}}>
            

            <Text style={{width: 50, top: 10}}>
              
            </Text>
              <Text style={{width:150,top: 15, left: 50, fontSize: 16, lineHeight: 19}}></Text>
                      </View>
              </View>
                      
        </ScrollView>
        </View>
        )
        
    
}
// UserProfile.propTypes = {
//     fetchConvo: PropTypes.func.isRequired,
//     randomConvo: PropTypes.object.isRequired
// }
  const styles = StyleSheet.create({
      image: {
          position: 'absolute',
          width: 360,
          height: 311,
          left: 50% - 360/2,
          top: 0
      }
  });
  // const mapStateToProps = state =>{
  //   return {
  //       randomConvo:state
  //   };
  // };
  // const  mapDispatchToProps = (dispatch, props) =>{
  //   return {
  //     fetchConvo:()=>{
  //       dispatch(fetchConvo())
  //     }
  //   }
  // }
  
  export default UserProfile;