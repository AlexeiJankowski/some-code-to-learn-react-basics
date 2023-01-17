import axios from 'axios';

export const getArticles = () => {
  return axios.get('/api/articles');
}

export const getArticle = id => {
  return axios.get(`/api/articles/${id}`);
}

export const deleteArticle = id => {
  return axios.delete(`/api/articles/${id}`);
}

export const changeArticle = item => {
  return axios.put(`/api/articles/${item.id.toString()}`, item);
}

export const addArticle = item => {
  return axios.post('/api/articles/add-post', item);
}

export const getContacts = () => {
  return axios.get(`/api/contacts`);
}