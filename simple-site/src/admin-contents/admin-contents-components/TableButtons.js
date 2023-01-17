import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { deleteArticle } from '../../data/articlesData';
import { deleteUser } from '../../data/usersData';
import EditPost from '../EditPost';

import './TableButtons.css';

const TableButtons = ({itemId, setRefreshTable, type}) => {
  const onEdit = id => {

  }

  const onDelete = (id, type) => {
    if (type === "post") {
      deleteArticle(id);
    }
    if (type === "user") {
      deleteUser(id);
    }   
    setRefreshTable(prev => !prev);
  }

  return (
    <div className="btn__container">
      <EditButton
        itemId={itemId}
        type={type}
      />
      <button 
        className="btn btn__table btn__table--delete" 
        type="button"
        onClick={() => onDelete(itemId, type)}
        >
        Delete
      </button>
    </div>
  )
}

const EditButton = ({itemId, type}) => {
  const [link, setLink] = useState('');

  useEffect(() => {
    if (type === "post") {
      setLink(`/admin/edit-post/${itemId}`)
    }
    if (type === "user") {
      setLink(`/admin/edit-user/${itemId}`)
    }
  },[link])

  return (
    <NavLink 
      to={link}
      className="btn btn__table btn__table--edit"
      >
      Edit
    </NavLink>
  )
}

export default TableButtons;