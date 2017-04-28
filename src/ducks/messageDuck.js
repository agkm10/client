
//LIBRARIES
import _ from 'lodash';
//EXPORTED FUNCTIONS
import { postMessage, chatRead } from './socketDuck';
import { reset } from 'redux-form';

const GET_MESSAGES = "GET_MESSAGES",
    SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS',
    SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING',
    POST_SYSTEM_MESSAGE = 'POST_SYSTEM_MESSAGE';

const initialState = {
    userID: '',
    messages:[{}],
    loadingmessages:true,
    submittingmessage:false,
    count_messages:[0],
    watsonMessage: null
}

export default function messageDuck( state = initialState, action ) {
    switch ( action.type ) {
        case GET_MESSAGES:
            if ( !action.messages ){
                return Object.assign({}, state, {
                    messages: action.messages,
                    loadingmessages:false,
                    count_messages:[]
                })
            }
            else{
                let count_messages = []
                count_messages.push( _.sumBy( action.messages, message =>
                    message.read===false && message.type==='admin'
                    ?1:0
                ))
                return Object.assign( {}, state, {
                    messages: action.messages,
                    loadingmessages:false,
                    count_messages:count_messages
                })
            }
        case SEND_MESSAGE_PENDING:
            return Object.assign( {}, state,{
                submittingmessage:true
            })
        case SEND_MESSAGE_SUCCESS:
            let newMessages = Object.assign( [], state.messages );
            newMessages.push( action.payload[0] )
            return Object.assign( {}, state,{
                submittingmessage:false,
                messages:newMessages
            })
        case POST_SYSTEM_MESSAGE:
			      return Object.assign( {}, state,  {
                watsonMessage: action.message
            })                   
        default:
            return state;
    }
}

export function getMessages( messages ) {
    return {
        type: GET_MESSAGES,
        messages
    }
}

export function sendMessage( chatid, userid, message ){
    let messagebody = { chatid, userid, message }
    postMessage( messagebody )
    return dispatch=>{
        dispatch( { type: SEND_MESSAGE_PENDING } )
        dispatch( reset( 'messageForm' ) )
    }
}

export function updateMessages( data ) {
    return dispatch=>{
        dispatch( { type:SEND_MESSAGE_SUCCESS,payload:data } )
    }
}

export function getChat( userId ) {
    return dispatch => {
        chatRead( userId )
    }
}

export function postSystemWatson(message) {
	return {
		type: POST_SYSTEM_MESSAGE,
		message
	}
}
export function clearSystemWatson() {
	return {
		type: POST_SYSTEM_MESSAGE,
		message: ""
	}
}
