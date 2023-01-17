import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUsers } from '../data/usersData';

import './LoginModal.css';

const LoginModal = ({setOpenLoginModal, setLoggedIn, setIsAdmin}) => {
  const [user, setUser] = useState({
    name: "",
    password: ""
  }); 
  const [showError, setShowError] = useState(false);
  

  const onChangeHandler = e => {
    let newUser = {
      ...user,
      [e.target.name]: e.target.value
    }    
    setUser(newUser);    
  }

  const logginIn = user => {
    getUsers().then(users => users.data.find(userf => 
        userf.email === user.email && userf.password === user.password)).then(res => {
          if(res) {     
            setLoggedIn(true);
            setOpenLoginModal(false);
            if (res.admin) {
              setIsAdmin(true);
            }
          } else {
            setShowError(true);
          }      
        });
  }

  return (
    <>      
      <section 
          className={`login-modal ${showError ? 'background-error' : ''}`}>
          <div 
            className={`login-modal__content ${showError ? 'error-border' : ''}`}>
            <span 
              className="login-modal__close"
              onClick={() => setOpenLoginModal(prev => !prev)}>&#10006;</span>
            <h2 className="login-modal__header">Login</h2>
            <span className={`login-modal__error ${showError ? '' : 'hide'}`}>Wrong Email or Password</span>
            <form className="form form__login">
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="email">Email : </label>
                <input 
                  className="form__input" 
                  id="email"
                  name="email"
                  onChange={onChangeHandler}></input>
              </div>
              <div className="form__input-wrapper">
                <label className="form__label" htmlFor="password">Password : </label>
                <input 
                  className="form__input" 
                  id="password"
                  // type="password"
                  name="password"
                  onChange={onChangeHandler}></input>
              </div>
              <button 
                type="submit" 
                className="btn btn__submit"
                onClick={(e) => {e.preventDefault(); logginIn(user)}}
                >
                Login
              </button>
            </form>      
          </div>
        </section>
    </>
  )
}

export default LoginModal;