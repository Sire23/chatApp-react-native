import { Alert } from 'react-native';
import  { 
    FETCHING_CONVO_REQUEST,
    FETCHING_CONVO_SUCCESS,
    FETCHING_CONVO_FAILURE,
    ADD_SELECTED_USER
} from './types';

export const fetchingConvoRequest = () => ({ type: FETCHING_CONVO_REQUEST});

export const fetchingConvoSuccess = json => ({ 
    
    type: FETCHING_CONVO_SUCCESS, 
    payload: json
});

export const fetchingConvoFailure = (error) => ({ 
    type: FETCHING_CONVO_FAILURE,
    payload: error
});

export const fetchConvo = () => {
    return async dispatch => {
    
        dispatch(fetchingConvoRequest());
        const url = 'http://192.168.1.61/redux/index.php';
        fetch(url)
      .then((response) => response.json())
      .then((response) => {
          
        dispatch(fetchingConvoSuccess(response));
       
       
      })
      .catch((error) => {
        dispatch(fetchingConvoFailure(error));
      });
  }
      
}

export function addSelectedUser(user){
  return {
    type: ADD_SELECTED_USER,
    payload: {user}
  }
}