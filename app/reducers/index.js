let defaultState = {
  streams: [],
  activeStream: null
}

function visibleStreams(state = defaultState, action) {
  if (action.type === 'FETCH_STREAMS') {
    return state;
  } else if (action.type === 'FETCH_STREAMS_SUCCESS') {
    return { ...state, streams: action.payload};
  } else if (action.type === 'FETCH_STREAMS_FAILURE') {

  } else if (action.type === 'ADD_STREAM') {

  } else if (action.type === 'ADD_STREAM_SUCCESS') {

  } else if (action.type === 'FETCH_STREAM') {

  } else if (action.type === 'FETCH_STREAM_SUCCESS') {
    return { ...state, activeStream: action.payload};
  } else if (action.type === 'FETCH_STREAM_FAILURE') {

  } else if (action.type === 'UPDATE_STREAM') {

  } else if (action.type === 'UPDATE_STREAM_SUCCESS') {
  
  } else if (action.type === 'DELETE_STREAM') {
    
  } else if (action.type === 'DELETE_STREAM_SUCCESS') {
    
  }
  return state;
}

export default visibleStreams;
