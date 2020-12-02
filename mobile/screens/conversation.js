import  React, { Component,useEffect,useState,setState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
  } from 'react-native';
//import { color } from 'react-native-reanimated';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon_att from 'react-native-vector-icons/Entypo';
import Icon_check from 'react-native-vector-icons/Ionicons';
//import Messages from './messages';




function Conversation(props) {
  const [user, setUser] = useState('');
    //const[text, state] = setState('')
    // const {navigation} = this.props;
    // const  user = navigation.getParam('user');
    useEffect(() => {
        setUser(props.navigation.getParam('user'));
    })
    
    // console.log("my user",user.dp);
        //console.log("my convo",props.randomConvo.selectedUser.dp);
        
        return (
  
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                  <View style={styles.header}>
            <Image source={{uri: `${user.dp}`}}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15, bottom: 25}}
        />
        
        <View>
        {/* <Icon_menu name="dots-three-vertical"  size={30}/> */}
        <Text
                  style={{
                    width: 200,
                  height: 30,
                  left: 17,
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 25,
                    lineHeight: 21 // position where you want
                   
                  }}
                >{user.name}</Text>
                <Text style={{
                    width: 40,
                  height: 20,
                  left: 17,
                    fontSize: 12,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 10,
                    lineHeight: 21
                     }}>Online</Text>
                     </View>
    </View>   
              <ScrollView>
            {/* <Text style={styles.TextStyle}>
            {user.name}
          </Text> */}
          <View style={{backgroundColor: 'green', borderRadius: 10, paddingRight: 30, width: 248, height: 120, marginLeft: 97, marginTop: 10}}>
          <Text style={{width:220, height: 100, top:2 ,left: 12, justifyContent: 'center'}} multiline={true}>{user.message}</Text>
          
          </View>
          <View style={{ left: 250, flexDirection: 'row'}}>
          <Icon_check name="checkmark-outline" color="#AEB5BC" size={20}/>
          <Text style={{fontSize: 14,color:"#AEB5BC" }}>3 hours ago</Text>
          </View>

{/* received text */}
          <View style={{backgroundColor: 'white', borderRadius: 10, paddingLeft: 30, width: 248, height: 120, marginRight: 97, marginTop: 10}}>
          <Text style={{width:220, height: 100, top:2 ,right: 12, justifyContent: 'center'}} multiline={true}>{user.receivedText}</Text>
          
          </View>
          <View style={{ right: 250, flexDirection: 'row'}}>
          <Icon_check name="checkmark-outline" color="#AEB5BC" size={20}/>
          <Text style={{fontSize: 14,color:"#AEB5BC" }}>a few seconds ago</Text>
          </View>
        </ScrollView >
        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, width:365, height: 41, borderRadius:18, backgroundColor: '#FFFFFF'}}>
          <Icon_att name="attachment" size={30} style={{left: 10}} />
          <Icon_att name="emoji-happy" size={30}  style={{ left: 12}}/>
        {/* <Messages /> */}
<View style={styles.textContainer}>
<TextInput multiline={true} 
autoCorrect={false} 
// value={this.state.chatMessage}
// onSubmitEditing={() => this.submitChatMessage}
// onChange={chatMessage => {
//     this.setState({chatMessage});
//   }
//}
style={styles.input} placeholder="write your message......."
// value={this.state.message}
//onChangeText={(text) => this.setState({message: text})}
/>
</View>
<View style={styles.sendContainer}>
<TouchableOpacity
style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: '#f2f2f2',bottom: 8}}>
<Icon name="send" size={30} color='green' />
</TouchableOpacity>
</View>

 </View> 

</KeyboardAvoidingView>
        )
            
      
}
Conversation.propTypes = {
    fetchConvo: PropTypes.func.isRequired,
    randomConvo: PropTypes.object.isRequired
}
var styles = StyleSheet.create({
  header: {
    width:450,
    height: 60,
    paddingTop: 38,
    backgroundColor: 'green',
    flexDirection: 'row'
}, 
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'stretch',
  backgroundColor: '#ffffff'
  },
  topContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#6E5BAA',
  paddingTop: 20,
  },
  textContainer: {
      flex: 1,
      justifyContent: 'center',
      width: 242,
height: 40,
      },
      sendContainer: {
      justifyContent: 'flex-end',
      paddingRight: 10
      },
      
      input: {
      //width: Dimensions.windowSize.width – 70,
      width:230,
      color: '#555555',
      paddingRight: 10,
      paddingLeft: 10,
       height: 34,
       borderColor: '#6E5BAA',
       borderWidth: 1,
       borderRadius: 10,
       alignSelf: 'center',
       backgroundColor: '#ffffff',
       left: 11,
       height: 40
       
      },
   });
  
  const mapStateToProps = state =>{
    return {
        randomConvo:state
    };
  };
  const  mapDispatchToProps = (dispatch, props) =>{
    return {
      fetchConvo:()=>{
        dispatch(fetchConvo())
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Conversation);