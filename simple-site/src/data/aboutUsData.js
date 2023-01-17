import axios from 'axios';

export const getAboutUs = () => {
  return axios.get('/api/about-us');
}

export const changeAboutUs = item => {
  return axios.put('/api/about-us', item);
}