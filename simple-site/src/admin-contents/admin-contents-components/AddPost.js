import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle, changeArticle, addArticle } from '../../data/articlesData';

import './AddPost.css';

const AddPost = ({id}) => {
  const [article, setArticle] = useState({});
  const params = useParams();

  useState(() => {
    if (id != null) { 
      getArticle(params.id).then(art => {
        setArticle({
          id: art.data.id,
          title: art.data.title,
          text: art.data.text,
          img: art.data.img
        })
      });
    }
  }, [article, id])  

  const onAdd = article => {
    if (article.text && article.title) {
      if (id != null) {
        changeArticle(article);
      } else {
        addArticle(article);
      }
    }    
  }

  const onChangeHandler = e => {
    if (e.target.value != null && e.target.value !== '') {
      let newArticle = {
        ...article,
        [e.target.name]: e.target.value
      }
      setArticle(newArticle);
    }    
  }

  const onSubmitHandler = e => {
    e.preventDefault(); 
    onAdd(article);
    setArticle({id: null, title: '', text: '', img: ''});
  }

  return (
    <div className="container">
      <form className="form form__add-post">
        <div className="form__input-wrapper form__input-wrapper--add-post">
          <label 
            className="form__label form__label--add-post" 
            htmlFor="title"
            >
            Title : 
          </label>
          <input 
            name="title"
            className="form__input form__input--add-post" 
            id="title"
            value={article.title ? article.title : ''}
            onChange={onChangeHandler}
            >
          </input>
        </div>
        <div className="from__input-wrapper form__textarea-wrapper--add-post">
          <label className="form__label form__label--add-post" htmlFor="post-text">Post : </label>
          <textarea 
            name="text"
            className="form__textarea form__textarea--add-post" 
            id="post-text" 
            rows="20"
            onChange={onChangeHandler}
            value={article.text ? article.text : ''}
            ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn__form--add-post"
          onClick={onSubmitHandler}
          >
          Save
        </button>
      </form>      
    </div>
  )
}

export default AddPost;