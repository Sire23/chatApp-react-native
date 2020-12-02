// import React, {Component} from 'react';
// import { View,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon_att from 'react-native-vector-icons/Entypo';
// import io from 'socket.io-client';


// class Messages extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//           chatMessage: "",
//           chatMessages: []
//         }
    
//       }
//       componentDidMount() {
//         this.socket = io("http://192.168.1.44:3000");
//         this.socket.on("chat message", msg => {
//           this.setState({ chatMessage: [...this.state.chatMessages, msg ]});
//         })
//       }

//       submitChatMessage() { 
//         this.socket.emit("chat message", this.state.chatMessage);
//         this.setState({ chatMessage: ""});
//       }
    
      
//     render() {
//         const chatMessages = this.state.chatMessages.map(chatMessage => <Text key={chatMessage}>{chatMessage}</Text>)
//         return(
//             <View>
//                  <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, width:365, height: 41, borderRadius:18, backgroundColor: '#FFFFFF'}}>
//           <Icon_att name="attachment" size={30} style={{left: 10}} />
//           <Icon_att name="emoji-happy" size={30}  style={{ left: 12}}/>
        
// <View style={styles.textContainer}>
// <TextInput multiline={true} 
// autoCorrect={false} 
// value={this.state.chatMessage}
// onSubmitEditing={() => this.submitChatMessage}
// onChange={chatMessage => {
//     this.setState({chatMessage});
//   }
// }
// style={styles.input} placeholder="write your message......."
// value={this.state.message}
// onChangeText={(text) => this.setState({message: text})}
// />
// </View>
// <View style={styles.sendContainer}>
// <TouchableOpacity
// style={{ height: 30, width: 30, borderRadius: 30, backgroundColor: '#f2f2f2',bottom: 8}}>
// <Icon name="send" size={30} color='green' />
// </TouchableOpacity>
// </View>

// </View>
//                 {chatMessages}
//             </View>
//         )
//     }
// }export default Messages;

// const styles = StyleSheet.create({
//     textContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         width: 242,
//         height: 40,
//         },
//         sendContainer: {
//         justifyContent: 'flex-end',
//         paddingRight: 10
//         },
        
//         input: {
//         //width: Dimensions.windowSize.width – 70,
//         width:230,
//         color: '#555555',
//         paddingRight: 10,
//         paddingLeft: 10,
//          //height: 34,
//          borderColor: '#6E5BAA',
//          borderWidth: 1,
//          borderRadius: 10,
//          alignSelf: 'center',
//          backgroundColor: '#ffffff',
//          left: 11,
//          height: 40
         
//         },
// });
