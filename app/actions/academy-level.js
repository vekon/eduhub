import axios from 'axios';

export const fetchAcademyLevels = () => {
  const req = axios({
    method: 'get',
    url: 'http://localhost:3200/academylevels'
  });

  return {
    type: 'FETCH_ACADEMY_LEVELS',
    payload: req
  }
}

export const fetchAcademyLevelsSuccess = (response) => {
  return {
    type: 'FETCH_ACADEMYLEVELS_SUCCESS',
    payload: response
  }
}

export const fetchAcademyLevelsFailure = (error) => {
  return {
    type: 'FETCH_ACADEMYLEVELS_FAILURE',
    payload: error
  }
}

export const fetchAcademyLevel = (id) => {
  const req = axios({
    method: 'get',
    url: 'http://localhost:3200/getacademylevel/'+id
  });

  return {
    type: 'FETCH_ACADEMY_LEVEL',
    payload: req
  }
}

export const fetchAcademyLevelSuccess = (response) => {
  return {
    type: 'FETCH_ACADEMYLEVEL_SUCCESS',
    payload: response
  }
}

export const fetchAcademyLevelFailure = (error) => {
  return {
    type: 'FETCH_ACADEMYLEVEL_FAILURE',
    payload: error
  }
}

export const submitAcademyLevel = (values) => {
  const req = axios({
    method: 'post',
    data: values,
    url: 'http://localhost:3200/addacademylevel'
  });

  return {
    type: 'SUBMIT_ACADEMY_LEVEL',
    payload: req
  }
}

export const updateAcademyLevel = (values) => {
  const req = axios({
    method: 'put',
    data: values,
    url: 'http://localhost:3200/updateacademylevel'
  });

  return {
    type: 'UPDATE_ACADEMY_LEVEL',
    payload: req
  }
}

export const deleteAcademyLevel = (id) => {
  const req = axios({
    method: 'delete',
    url: 'http://localhost:3200/deleteacademylevel/'+id
  });

  return {
    type: 'DELETE_ACADEMY_LEVEL',
    payload: req
  }
}