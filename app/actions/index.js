import axios from 'axios';

export const fetchStreams = () => {
  const req = axios({
    method: 'get',
    url: 'http://localhost:3200'
  });

  return {
    type: 'FETCH_STREAMS',
    payload: req
  }
}

export const fetchStreamsSuccess = (response) => {
  return {
    type: 'FETCH_STREAMS_SUCCESS',
    payload: response
  }
}

export const fetchStreamsFailure = (error) => {
  return {
    type: 'FETCH_STREAMS_FAILURE',
    payload: error
  }
}