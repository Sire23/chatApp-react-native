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
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Chats from './chats';
import convoReducer from '../app/redux/reducers/convoReducer';

const createStoreWithMiddleware = applyMiddleware (thunk)(createStore);

const store = createStoreWithMiddleware(convoReducer);

export default class Convo extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
       // alert(JSON.stringify(this.props.navigation.getParam('item')));
        return (
            <Provider store={store}>
                <Chats  navigation = {this.props.navigation}/>
            </Provider>
            
        );

    }
    
    
}
