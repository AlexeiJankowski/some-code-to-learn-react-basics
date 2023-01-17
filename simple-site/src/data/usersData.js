import axios from 'axios';

export const getUsers = () => {
  return axios.get('/api/users');
}

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
}

export const changeUser = item => {
  return axios.put(`/api/users/${item.id}`, item);
}

export const deleteUser = id => {
  return axios.delete(`/api/users/${id}`);
}