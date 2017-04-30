import axiosLibrary from 'axios';
const axios = axiosLibrary.create( { withCredentials: true } );
import { authenticate } from './socketDuck';
import { APISERVERPATH } from '../config.json'


//Action Definitions
    const AUTH_REQUEST = "AUTH_REQUEST",
        AUTH_SUCCESS = "AUTH_SUCCESS",
        AUTH_FAILURE = "AUTH_FAILURE",
        CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS",
        CHECK_AUTH_FAILURE = "CHECK_AUTH_FAILURE",
        LOGOUT = "LOGOUT",
        SOCKET_CONNECTED = "SOCKET_CONNECTED",
        BASE_API_URL = APISERVERPATH;

//Initial State
    const initialState = {
        user: {},
        isAuthenticated: null,
        loadingUser: false,
        loginError: null,
        socket: null
    };

//User Duck
    export default function authDuck( state = initialState, action ) {
        switch ( action.type ) {
            case AUTH_REQUEST:
                return Object.assign( {}, state, {
                    loadingUser: true,
                    isAuthenticated: false,
                    loginError: null
                })
            case AUTH_SUCCESS:
                return Object.assign( {}, state, {
                    user: action.payload,
                    loadingUser: false,
                    loginError: null,
                    isAuthenticated: true
                })
            case AUTH_FAILURE:
                return Object.assign( {}, state, {
                    loadingUser: false,
                    loginError: action.error,
                    isAuthenticated:false
                })
            case CHECK_AUTH_SUCCESS:
                return Object.assign( {}, state, {
                    isAuthenticated:true
                })
            case CHECK_AUTH_FAILURE:
                return Object.assign( {}, state, {
                    isAuthenticated:false
                })
            case LOGOUT:
                return Object.assign( {}, state, {
                    isAuthenticated: false,
                    socket: null,
                    user: {},
                    loadingUser: false
                })
            case SOCKET_CONNECTED:
                return Object.assign( {}, state, {
                    socket: action.payload
                })
            default:
                return state;
        }
    }

//Dispatch Functions
function authSuccess( response ) {
    return { type: AUTH_SUCCESS, payload: response.data }
}

function authRequest() {
    return { type: AUTH_REQUEST }
}

function authFailure( err ) {
    return { type: AUTH_FAILURE, error: err }
}

function checkAuthSuccess(){
    return { type: CHECK_AUTH_SUCCESS }
}

function checkAuthFailure(){
    return { type: CHECK_AUTH_FAILURE }
}

function logClientOut() {
    return { type: LOGOUT }
}

function setCurrentUser( dispatch, response ) {
    localStorage.setItem( 'token', JSON.stringify( response.data ) )
    dispatch( authSuccess( response ) )
}

//Export Functions

export function socketConnected( data ) {
    return { type: SOCKET_CONNECTED, payload: data }
}

export function checkUserAuth() {
    return dispatch => {
        if( localStorage.getItem( 'token' ) ){
            dispatch( checkAuthSuccess() )
        }
        else { dispatch( checkAuthFailure() ) }
    }
}

export function login( data ) {
    return dispatch => {
        dispatch( authRequest() )
        axios.post( BASE_API_URL + '/login', data )
        .then( response => {
            setCurrentUser( dispatch, response )
            authenticate( response.data.id )
        })
        .catch( err => {
            dispatch( authFailure( err ) )
        })
    }
}

export function logout() {
    return dispatch => {
        axios.get( BASE_API_URL + '/logout' )
        .then( response => {
            localStorage.removeItem( 'token' )
            dispatch( logClientOut() )
        })
    }
}
