const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 5000;

const data = require('./data.js');

let articles = data.posts;
let users = data.users;
let aboutUs = data.aboutUs;
let contacts = data.contacts;

app.get('/api/articles', (req, res) => {
  res.send(articles);
});
app.get('/api/articles/:id', (req, res) => {
  res.send(articles.find(post => post.id === parseInt(req.params.id)));
});
app.post('/api/articles/add-post', (req, res) => {
  articles = [
    ...articles,
    {
      id: articles.length,
      ...req.body
    }
  ]
});
app.delete('/api/articles/:id', (req, res) => {
  articles = articles.filter(post => post.id !== parseInt(req.params.id));
  res.status(204);
  res.send();  
});
app.put('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id); 

  articles = articles.map(article => {
    if (article.id === id) {
      return req.body;
    }
    return article;
  })
});

app.get('/api/users', (req, res) => {
  res.send(users);
});
app.get('/api/users/:id', (req, res) => {
  res.send(users.find(user => user.id === parseInt(req.params.id)));
});
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id); 
  
  users = users.map(user => {
    if (user.id === id) {
      return req.body;
    }
    return user;
  })
});
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(user => user.id !== parseInt(req.params.id));
  res.status(204);
  res.send(users);
});

app.get('/api/contacts', (req, res) => {
  res.send(contacts);
});

app.get('/api/about-us', (req, res) => {
  res.send(aboutUs);
});
app.put('/api/about-us', (req, res) => {  
  aboutUs = req.body;
  res.end();
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));