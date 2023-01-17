import React from 'react';
import {Link} from 'react-router-dom';

import './ArticlePreview.css';

const ArticlePreview = ({title, text, imageSrc, imageAlt, id}) => {
  const previewText = text => {
    return text.slice(0, 300);
  }

  return (
    <figure className="preview">
      <img 
        className="preview__img"
        src={imageSrc} 
        alt={imageAlt} />
      <figcaption className="preview__figcaption">
        <h3>{title}</h3>
        <p className="preview__paragraph">{previewText(text)}</p>
        <Link 
          to={`/articles/${id}`} 
          className="btn preview__btn">Read More</Link>
      </figcaption>
    </figure>
  )
}

export default ArticlePreview;