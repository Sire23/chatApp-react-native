//var React = require('react-native');
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import SendBird from 'sendbird';
var sendbird = require('sendbird');


 export default class Chat extends Component {
  
        constructor(props) {
            super(props);
            this.state = {
               message: "",
               messageList: []
               //password: ""
            }
        
      }
    
        

     render() { 
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <TouchableHighlight
              underlayColor={'#4e4273'}
              onPress={this.onBackPress}
              style={{marginLeft: 15}}
              >
              <Text style={{color: '#fff'}}>&lt; Back</Text>
            </TouchableHighlight>
          </View>
          <View style={{backgroundColor: 'green', borderRadius: 10, paddingRight: 10, width: 248, height: 60, marginLeft: 97, marginTop: 10}}>
          <Text style={{width:220, height: 76, top:2 ,left: 12}}>{user.message}</Text>
          </View>
          <View style={styles.chatContainer}>
            <Text style={{color: '#000'}}>Chat</Text>
           </View>
          <View style={styles.inputContainer}>
            <Text style={{color: '#000'}}>Input</Text>
          </View>
          <View style={styles.inputContainer}>
    <View  style={{ flexDirection: 'row'}}>
<View style={styles.textContainer}>
<TextInput
style={styles.input}
value={this.state.message}
onChangeText={(text) => this.setState({message: text})}
/>
</View>
<View style={styles.sendContainer}>
<TouchableHighlight
underlayColor={'#4e4273'}
onPress={() => this.onSendPress()}
>
<Text style={styles.sendLabel}>SEND</Text>
</TouchableHighlight>
</View>
</View>
</View>
        </View>
        
      );
    }
    onBackPress() {
      this.props.navigator.pop();
    }
    onSendPress() {
        console.log(this.state.message);
        this.setState({message: ''});
        }  
        // componentWillMount() {
        //     sendbird.events.onMessageReceived = (obj) => {
        //       this.setState({messageList: this.state.messageList.concat([obj])});
        //     };
        //     this.getMessages();
        //   }  
}


var styles = StyleSheet.create({
    
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
chatContainer: {
flex: 11,
justifyContent: 'center',
alignItems: 'stretch'
},
inputContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'stretch',
backgroundColor: '#6E5BAA'
},
textContainer: {
    flex: 1,
    justifyContent: 'center'
    },
    sendContainer: {
    justifyContent: 'flex-end',
    paddingRight: 10
    },
    sendLabel: {
    color: '#ffffff',
    fontSize: 15
    },
    input: {
    //width: Dimensions.windowSize.width – 70,
    width:Dimensions.get('window').width -70,
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
     paddingTop: 5,
     height: 32,
     borderColor: '#6E5BAA',
     borderWidth: 1,
     borderRadius: 2,
     alignSelf: 'center',
     backgroundColor: '#ffffff'
    },
 });
