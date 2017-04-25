import axiosLibrary from 'axios'
const axios = axiosLibrary.create({withCredentials: true})

  const COMP_REQUEST = "COMP_REQUEST",
    COMP_SUCCESS = "COMP_SUCCESS",
    COMP_FAILURE = "COMP_FAILURE",
    BASE_URL = "http://localhost:3002/api";

  const initialState = {
    varComponentTypes: [],
    loadingComps: false,
    compsLoaded: false,
    errorLoadingComps: false
  };

  export default function clientDuck(state = initialState, action) {
    switch (action.type) {
      case COMP_REQUEST:
        return Object.assign({}, state, {
          loadingComps: true,
          compsLoaded: false,
          errorLoadingComps: false
        })
      case COMP_SUCCESS:
        return Object.assign({}, state, {
          varComponentTypes: action.payload,
          loadingComps: false,
          errorLoadingComps: false,
          compsLoaded: true
        })
      case COMP_FAILURE:
        return Object.assign({}, state, {
          errorLoadingComps: true,
          loadingComps: false,
          compError: action.error
        })
      default:
        return state;
    }
  }

  function compSuccess(response) {
    return {type: COMP_SUCCESS, payload: response}
  }

  function compRequest() {
    return {type: COMP_REQUEST}
  }

  function compFailure(err) {
    return {type: COMP_FAILURE, error: err}
  }
  function setComps(dispatch, response) {
    dispatch(compSuccess(response));
  }
  //data is going to be req.body
  export function getComps() {
    return (dispatch) => {
      dispatch(compRequest())
      axios.get(BASE_URL + '/comps').then((response) => {
        setComps(dispatch, response)
      }).catch(err => {
        console.log(err)
        dispatch(compFailure(err.response.data))
      });
    }
  }


  export function updateComps(data) {
    return (dispatch) => {
      dispatch(compRequest())
      axios.put(BASE_URL + '/comps', data).then((response) => {
        setComps(dispatch, response)
      }).catch(err => {
        console.log(err)
        dispatch(compFailure(err.response.data))
      });
  }
}
