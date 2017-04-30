import { getMessages, updateMessages } from './ducks/messageDuck';
import { chatRead } from './ducks/socketDuck';
import { socketConnected } from './ducks/authDuck';
import { SERVERPATH } from './config.json'
import io from 'socket.io-client';

export const socket = io( SERVERPATH );

export default function ( dispatch, getState ) {
    socket.on( 'socketid', data => {
        dispatch ( socketConnected( data ))
    })
    socket.on( 'messagesfetched', data => {
        dispatch( getMessages( data ) )
    })
    socket.on( 'messagereceived', data => {
        dispatch( updateMessages( data ) )
    })
    socket.on( 'newmessageadmin', data => {
        if( getState().messageDuck.messagecomploaded ) {
            chatRead( getState().authDuck.user.id )
        }
        dispatch( getMessages( data ) )
    })
}
