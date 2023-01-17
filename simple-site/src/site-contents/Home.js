import React, { useEffect, useState } from 'react';
import { getArticles } from '../data/articlesData';
import ArticlePreview from './ArticlePreview';

import './Home.css';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getArticles().then(art => {
      if (isMounted) {
        setArticles(art.data);
      }      
    })
    return () => {
      isMounted = false;
    }
  }, [])

  if(articles && articles.length > 0) {      
    return (
      <main className="articles">
        <section className="first-row">
          <ArticlePreview 
            className="head-message" 
            id={articles[0].id}
            title={articles[0].title}
            text={articles[0].text}
            imageSrc={articles[0].img}
          />
        </section>   

        <section>
          <h2 className="section-heading">Latest Articles</h2>
          <div className="second-row">
            {articles.map((article, index) => {
              if (index > 0) {
                return (
                  <ArticlePreview 
                    className="preview-figure"
                    id={article.id}
                    title={article.title}
                    text={article.text}
                    imageSrc={article.img}
                  />
                )
              }              
            })} 
          </div>          
        </section>
        
        {/* <div className="up-button">Up</div> */}
      </main>
    )
  } else {
    return (
      <div className="empty-table__wrapper">
        <h2 className="empty-table__heading">There's no articles yet</h2>
      </div>
    )
  } 
}

export default Home;