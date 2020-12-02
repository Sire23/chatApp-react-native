/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Navigator from './routes/userStack';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import peopleReducer from './app/redux/reducers/convoReducer';
import { Provider } from 'react-redux';
//import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import io from 'socket.io-client';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(peopleReducer);



// const getFonts = () => {
//   return Font.loadAsync({
//     'nunito-regular': require('./assets/fonts/Nunito-Regular')
//   });
// }


export default class App extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    const socket = io("http://localhost:3000");
  }

  render() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
 <Provider store={store}>
      <Navigator />
    </Provider>
  </SafeAreaView>  
  </SafeAreaProvider>  
    
  );
  }
}




