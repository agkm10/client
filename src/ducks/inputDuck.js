import axiosLibrary from 'axios'
const axios = axiosLibrary.create({withCredentials: true})

  const INPUT_REQUEST = "INPUT_REQUEST",
    INPUT_SUCCESS = "INPUT_SUCCESS",
    INPUT_FAILURE = "INPUT_FAILURE",
    BASE_URL = "http://localhost:3002/api";

  const initialState = {
    inputReturnValues: {},
    loadingInputs: false,
    inputsLoaded: false,
    errorLoadingInputs: false
  };

  export default function clientDuck(state = initialState, action) {
    switch (action.type) {
      case INPUT_REQUEST:
        return Object.assign({}, state, {
          loadingInputs: true,
          inputsLoaded: false,
          errorLoadingInputs: false
        })
      case INPUT_SUCCESS:
        return Object.assign({}, state, {
          inputReturnValues: action.payload,
          loadingInputs: false,
          errorLoadingInputs: false,
          inputsLoaded: true
        })
      case INPUT_FAILURE:
        return Object.assign({}, state, {
          errorLoadingInputs: true,
          loadingInputs: false,
          compError: action.error
        })
      default:
        return state;
    }
  }

  function InputSuccess(response) {
    return {type: INPUT_SUCCESS, payload: response}
  }

  function InputRequest() {
    return {type: INPUT_REQUEST}
  }

  function InputFailure(err) {
    return {type: INPUT_FAILURE, error: err}
  }
  function returnInputs(dispatch, response) {
    dispatch(InputSuccess(response));
  }
  //data is going to be req.body
  export function setInputs(data) {
    return (dispatch) => {
      dispatch(InputRequest())
      axios.put(BASE_URL + '/inputs',data).then((response) => {
        console.log('returnInputs', response)
        returnInputs(dispatch, response)
      }).catch(err => {
        console.log(err)
        dispatch(InputFailure(err.response.data))
      });
    }
  }

  export function getInputs() {
    return (dispatch) => {
      dispatch(InputRequest())
      axios.get(BASE_URL + '/inputs').then((response) => {
        console.log('returnInputs', response)
        returnInputs(dispatch, response)
      }).catch(err => {
        console.log(err)
        dispatch(InputFailure(err.response.data))
      });
    }
  }
