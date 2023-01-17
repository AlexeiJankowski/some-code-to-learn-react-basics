import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getAboutUs } from '../data/aboutUsData';

import './AboutUs.css';

const AboutUs = ({isAdmin}) => {
  const [aboutUs, setAboutUs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = false;
  },[])
  
  useEffect(() => {    
      getAboutUs().then(res => {
        setAboutUs(res.data)
      });
  },[])

  return (
    <div className="container">
      <article className="article article--frame">
        <h1 className="heading__about-us">{aboutUs.title}</h1>
        <img src={aboutUs.img} alt={aboutUs.alt} />        
        <p>{aboutUs.text}</p>   
        {isAdmin && <Link to="/admin/edit-about-us" className="btn">Edit</Link>}
      </article>
    </div>
  )
}

export default AboutUs;