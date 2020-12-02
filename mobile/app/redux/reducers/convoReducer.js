import  { 
    FETCHING_CONVO_REQUEST,
    FETCHING_CONVO_SUCCESS,
    FETCHING_CONVO_FAILURE,
    ADD_SELECTED_USER
} from '../actions/types';

const initialState = {
    isFetching: false,
    errorMessage: '',
    convo: [],
    selectedUser: null,
};

const convoReducer = (state = initialState, action) =>{
    switch(action.type) {
        
        case FETCHING_CONVO_REQUEST:
         
        return {
            ...state,
            isFetching: true
        };
        case FETCHING_CONVO_FAILURE:
            
                return {
                    ...state,
                    isFetching: false,
                    errorMessage: action.payload
                };
        case FETCHING_CONVO_SUCCESS:
        
            return {
                
                ...state,
                isFetching: false,
                convo: action.payload

            };
        case ADD_SELECTED_USER: 
            console.log(action.payload.user);
            return {
                ...state,
                selectedUser: action.payload.rd
            };
        default: return state;
    }
};

export default convoReducer;