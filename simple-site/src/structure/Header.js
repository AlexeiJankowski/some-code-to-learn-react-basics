import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import LoginModal from "../site-contents/LoginModal";

import './Header.css';

const Header = ({isAdmin, setIsAdmin}) => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); 
  const [isMenuShown, setIsMenuShown] = useState(false);
  
  const showMenu = (e) => {    
    setIsMenuShown(prev => !prev);   
  }

  return (
    <header className="header">   
      <NavLink className="header__logo" to="/"><h1>Some Site</h1></NavLink>
      <nav className="nav header-nav">
        <NavLink 
            className="nav__link open-menu"
            onClick={showMenu}>Menu</NavLink>
        <div className={`nav__main-menu-wrapper ${isMenuShown ? 'hide-menu' : ''}`}>
          <NavLink to="/" className="nav__link">Home</NavLink>
          <NavLink to="/contacts" className="nav__link">Contacts</NavLink>
          <NavLink to="/about-us" className="nav__link">About Us</NavLink>
          {isAdmin && <>
            <NavLink to="/admin/edit-users" className="nav__link">Users</NavLink>
            <NavLink to="/admin/edit-posts" className="nav__link">Posts</NavLink>
          </>}
        </div>   
        <div className={`nav__login-menu-wrapper ${isMenuShown ? 'hide-menu' : ''}`}>
          {!loggedIn && <NavLink 
            className="nav__link nav__login-link"
            onClick={() => setOpenLoginModal(prev => !prev)}
          >Login</NavLink>}
          {loggedIn && <NavLink 
            className="nav__link nav__login-link"
            onClick={() => {setLoggedIn(false); setIsAdmin(false)}}
          >LogOut</NavLink>}
        </div>        
      </nav>  
      {openLoginModal && 
        <LoginModal 
          setOpenLoginModal={setOpenLoginModal}
          setLoggedIn={setLoggedIn}
          setIsAdmin={setIsAdmin}
        />
      }
  </header>
  )
}

export default Header;