//LIBRARIES
import _ from 'lodash';
//EXPORTED FUNCTIONS
import { postMessage, chatRead } from './socketDuck';
import { reset } from 'redux-form';

const GET_MESSAGES = "GET_MESSAGES",
    SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS',
    SEND_MESSAGE_PENDING = 'SEND_MESSAGE_PENDING',
    POST_SYSTEM_MESSAGE = 'POST_SYSTEM_MESSAGE',
    MESSAGE_COMP_LOADED = 'MESSAGE_COMP_LOADED',
    MESSAGE_COMP_NOTLOADED = 'MESSAGE_COMP_NOTLOADED';

const initialState = {
    messages:[{}],
    loadingmessages:true,
    submittingmessage:false,
    count_messages:[0],
    watsonMessage: null,
    messagecomploaded:false
}

export default function messageDuck( state = initialState, action ) {
    switch ( action.type ) {
        case MESSAGE_COMP_LOADED:
            return Object.assign( {}, state, {
                messagecomploaded:true
            })
        case MESSAGE_COMP_NOTLOADED:
            return Object.assign( {}, state, {
                messagecomploaded:true
            })
        case GET_MESSAGES:
            if ( !action.messages ){
                return Object.assign( {}, state, {
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
            newMessages.push( action.payload[ 0 ] )
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

export function comploaded() {
    return dispatch => {
        dispatch( { type:MESSAGE_COMP_LOADED } )
    }
}

export function compunloaded() {
    return dispatch => {
        dispatch( { type:MESSAGE_COMP_NOTLOADED } )
    }
}

export function getMessages( messages ) {
    return dispatch => {
        dispatch( { type: GET_MESSAGES, messages } )
    }
}

export function sendMessage( chatid, userid, message ){
    let messagebody = { chatid, userid, message }
    postMessage( messagebody )
    return dispatch => {
        dispatch( { type: SEND_MESSAGE_PENDING } )
        dispatch( reset( 'messageForm' ) )
    }
}


export function updateMessages( data ) {
    return dispatch => {
        dispatch( { type:SEND_MESSAGE_SUCCESS,payload:data } )
    }
}

export function getChat( userId ) {
    return dispatch => {
        chatRead( userId )
    }
}

export function postSystemWatson( message ) {
	return dispatch =>
        dispatch( {
            type: POST_SYSTEM_MESSAGE,
		    message
        } )
}
export function clearSystemWatson() {
	return dispatch => {
		dispatch( {
            type: POST_SYSTEM_MESSAGE,
		    message: ""
        } )
	}
}
