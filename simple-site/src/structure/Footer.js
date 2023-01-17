import React from 'react';
import {NavLink} from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <NavLink className="logo" to="/"><h1>Some Site</h1></NavLink>
    </footer>
  )
}

export default Footer;