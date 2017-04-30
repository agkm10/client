import axiosLibrary from 'axios';
import { APISERVERPATH } from '../config.json';
const axios = axiosLibrary.create( { withCredentials: true } );

const INPUT_REQUEST = "INPUT_REQUEST",
    INPUT_SUCCESS = "INPUT_SUCCESS",
    INPUT_FAILURE = "INPUT_FAILURE",
    BASE_URL = APISERVERPATH;

const initialState = {
    inputReturnValues: {},
    loadingInputs: false,
    inputsLoaded: false,
    errorLoadingInputs: false,
    firstname: "",
    lastname: "",
    company: "",
    dynamicText: [
        {
            text1: "",
            text2: "",
            index: 0
        }
    ],
    socialinstagram: "",
    socialtwitter: "",
    socialyoutube: "",
    sociallinkedin: "",
    socialpinterest: "",
    socialother: "",
};

export default function clientDuck( state = initialState, action ) {
    switch ( action.type ) {
        case INPUT_REQUEST:
            return Object.assign( {}, state, {
                loadingInputs: true,
                inputsLoaded: false,
                errorLoadingInputs: false
            })
        case INPUT_SUCCESS:
            return Object.assign( {}, state, {
                inputReturnValues: action.payload,
                loadingInputs: false,
                errorLoadingInputs: false,
                inputsLoaded: true
                // firstname: action.payload.data[0].firstname,
                // lastname: action.payload.data[0].lastname,
                // company: action.payload.data[0].company,
                // dynamicText: action.payload.data[0].websites,
                // socialinstagram: action.payload.data[0].socialinstagram,
                // socialtwitter: action.payload.data[0].socialtwitter,
                // socialyoutube: action.payload.data[0].socialyoutube,
                // sociallinkedin: action.payload.data[0].sociallinkedin,
                // socialpinterest: action.payload.data[0].socialpinterest,
                // socialother: action.payload.data[0].socialother,
            })
        case INPUT_FAILURE:
            return Object.assign( {}, state, {
                errorLoadingInputs: true,
                loadingInputs: false,
                compError: action.error
            })
        default:
            return state;
    }
}

function InputSuccess( response ) {
    return { type: INPUT_SUCCESS, payload: response }
}

function InputRequest() {
    return { type: INPUT_REQUEST }
}

function InputFailure( err ) {
    return { type: INPUT_FAILURE, error: err }
}

  //data is going to be req.body
export function setInputs( data ) {
    return dispatch => {
        dispatch( InputRequest() )
        axios.put( BASE_URL + '/inputs',data ).then( response => {
            dispatch( InputSuccess( response) )
        })
        .catch( err => {
            if( err ){
                dispatch( InputFailure( err.response.data ) )
            }
        });
    }
}

export function getInputs() {
    return dispatch => {
        dispatch( InputRequest() )
        axios.get( BASE_URL + '/inputs' ).then( response => {
            dispatch( InputSuccess( response ) )
        })
        .catch( err => {
            if( err ){
                dispatch( InputFailure( err.response.data ) )
            }
        });
    }
}
