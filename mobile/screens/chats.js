import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { fetchConvo, addSelectedUser } from '../app/redux/actions/convoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class Chats extends Component {
  
constructor(props) {
    super(props);
    this.state ={
       
    }
    //this.pressHandler = this.pressHandler.bind(this);
}
pressHandler = (selectedUser) => {
  //this.props.HandleSelectedUser(selectedUser);
  this.props.navigation.navigate('UserProfile',{user: selectedUser});

}
pressHandler_t = (selectedUser) => {
  //this.props.HandleSelectedUser(selectedUser);
  this.props.navigation.navigate('Conversation', {user: selectedUser});

}
 
  renderItem = ({item}) => {
    

    return (
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        style={{ marginBottom: 3}} onPress={()=> this.pressHandler(item)}
        
        >
        <Image
          style={{width: 60, height: 60, borderRadius: 60, margin: 5}}
          source={{uri: item.dp}}
        />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 3}} onPress={()=> this.pressHandler_t(item)}>
        <View style={styles.container}>
          <Text style={{fontSize: 16, color: 'black', marginLeft: 5}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 14, color: 'black', marginBottom: 15}}>
            {item.message}
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  };
  renderSeparator = () => {
    
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'black'}}></View>
    );
  };

  componentDidMount() {
  
    this.props.fetchConvo();
  }

  render() {
    
    
    return this.props.randomConvo.isFetching ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="green" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <FlatList
          data={this.props.randomConvo.convo}
          renderItem={this.renderItem}
          keyExtractor={(_item, index) => String(index)}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            backgroundColor: 'green',
            borderRadius: 50,
            left: 280,
          }}>
          <Icon name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>
    );
    
  }
 }
 
 Chats.propTypes = {
  fetchConvo: PropTypes.func.isRequired,
  randomConvo: PropTypes.object.isRequired 

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0
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
    },
    HandleSelectedUser:(user)=>{
      dispatch(addSelectedUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats);