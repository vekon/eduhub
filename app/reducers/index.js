let defaultState = {
  streams: []
}

function visibleStreams(state = defaultState, action) {
  if (action.type === 'FETCH_STREAMS') {
    return state;
  } else if (action.type === 'FETCH_STREAMS_SUCCESS') {
    return { ...state, streams: action.payload}
  } else if (action.type === 'FETCH_STREAMS_FAILURE') {

  }
  return state;
}

export default visibleStreams;
