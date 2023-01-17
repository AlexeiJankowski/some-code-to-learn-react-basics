import React from 'react';
import ResultTable from './admin-contents-components/ResultTable';
import { getArticles } from '../data/articlesData';

const EditPosts = () => {
  return (
    <ResultTable 
      getItems={getArticles}
      head={["Title"]}
      type={"post"}
    />
  )
}

export default EditPosts;