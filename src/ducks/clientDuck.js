import axiosLibrary from 'axios'
const axios = axiosLibrary.create({withCredentials: true})

  const COMP_REQUEST = "COMP_REQUEST",
    COMP_SUCCESS = "COMP_SUCCESS",
    COMP_FAILURE = "COMP_FAILURE",
    COMP_COMPLETED = "COMP_COMPLETED",
    BASE_URL = "http://localhost:3002/api";

  const initialState = {
    varComponentTypes: [],
    loadingComps: false,
    compsLoaded: false,
    errorLoadingComps: false,
    checkcheck: ""
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
      case COMP_COMPLETED:
        var completedArr = {}
        Object.assign(completedArr, state.varComponentTypes)
        console.log('payload', action.payload)
        console.log('varcomptypes', state.varComponentTypes)
        completedArr.data.map(function(comp){
          if (comp.compName === action.payload.component) {
            comp.completed = action.payload.completed
          }
        })
        console.log('completedArr',completedArr)
        return Object.assign({}, state, {
          varComponentTypes: completedArr
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
  function compComplete(response) {
    return {type: COMP_COMPLETED, payload: response}
  }

  //data is going to be req.body
  export function getComps() {
    return (dispatch) => {
      dispatch(compRequest())
      axios.get(BASE_URL + '/comps').then((response) => {
        dispatch(compSuccess(response))
      }).catch(err => {
        if (err.response) {
        dispatch(compFailure(err.response.data))
      }
      });
    }
  }
  export function updateComps(data) {
    console.log('updateComps', data)
    return (dispatch) => {
      dispatch(compComplete(data))
      axios.put(BASE_URL + '/comps', data).then((response) => {
        console.log('updateComps Success', response)
      }).catch(err => {
        console.log(err)
        dispatch(compFailure(err.response.data))
      });
  }
}
