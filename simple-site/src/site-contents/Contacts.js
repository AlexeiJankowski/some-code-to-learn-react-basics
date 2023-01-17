import React, { useEffect, useState } from 'react';
import { getContacts } from '../data/articlesData';

import './Contacts.css';

const Contacts = () => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    getContacts().then(res => setContacts(res.data));
  },[])

  return (
    <div className="container">
      <article className="article article--frame">
        <h1 className="heading__contacts">{contacts.title}</h1>
        <img src={contacts.img} alt={contacts.alt} />        
        <p>Our Address : {contacts.address}</p>    
        <p>Call Us : {contacts.phone}</p>        
      </article>
    </div>
  )
}

export default Contacts;