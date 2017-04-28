import { socket } from '../socket-listeners';

export function authenticate( userId ) {
    socket.emit( 'authenticated', userId )
}

export function postMessage( message ) {
    socket.emit( 'newmessage', message )
}

export function chatRead( userId ) {
    socket.emit( 'chatread', userId )
}
