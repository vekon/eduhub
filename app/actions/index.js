import axios from 'axios';

export const fetchStreams = () => {
  const req = axios({
    method: 'get',
    url: 'http://localhost:3200/streams'
  });

  return {
    type: 'FETCH_STREAMS',
    payload: req
  }
}

export const fetchStream = (id) => {
  const req = axios({
    method: 'get',
    url: 'http://localhost:3200/getstream/'+id
  });

  return {
    type: 'FETCH_STREAM',
    payload: req
  }
}

export const fetchStreamsSuccess = (response) => {
  return {
    type: 'FETCH_STREAMS_SUCCESS',
    payload: response
  }
}

export const fetchStreamSuccess = (response) => {
  return {
    type: 'FETCH_STREAM_SUCCESS',
    payload: response
  }
}

export const fetchStreamsFailure = (error) => {
  return {
    type: 'FETCH_STREAMS_FAILURE',
    payload: error
  }
}

export const submitStream = (values) => {
  const req = axios({
    method: 'post',
    data: values,
    url: 'http://localhost:3200/addstream'
  });

  return {
    type: 'SUBMIT_STREAM',
    payload: req
  }
}

export const updateStream = (values) => {
  const req = axios({
    method: 'put',
    data: values,
    url: 'http://localhost:3200/updatestream'
  });

  return {
    type: 'UPDATE_STREAM',
    payload: req
  }
}

export const deleteStream = (id) => {
  const req = axios({
    method: 'delete',
    url: 'http://localhost:3200/deletestream/'+id
  });

  return {
    type: 'DELETE_STREAM',
    payload: req
  }
}