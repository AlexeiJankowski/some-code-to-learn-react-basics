import React, { useEffect, useState } from 'react';
import { getArticle } from '../data/articlesData';
import { useParams } from 'react-router-dom';

import './Article.css';

const Article = () => {
  const [article, setArticle] = useState({});

  const params = useParams();

  useEffect(() => {
    getArticle(params.id).then(res => setArticle(res.data));
  },[])

  if(article && article != null && article.author) {
    return (
      <div className="container">
        <article className="article">
          <h1>{article.title}</h1>
          <img src={article.img} alt="motorcycle"/>
          
          <p>{article.text}</p>
    
          <div className="author">Author : {article.author.name}</div>
        </article>
      </div>
    )
  }  
}

export default Article;