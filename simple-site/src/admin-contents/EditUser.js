import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getUser, changeUser } from '../data/usersData';

import './EditUser.css';

const EditUser = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  
  const onChangeUser = user => {
    changeUser(user);
  }

  const onChangeHandler = e => {    
    if (e.target.value != null && e.target.value !== '') {
      let newUser = {
        ...user,
        [e.target.name]: e.target.value
      } 
      setUser(newUser); 
    }      
  }

  useEffect(() => {    
    getUser(params.id).then(res => setUser(res.data))
  }, [params.id])

  if (user) {
    return (
      <div className="container container__edit-user">
       <form className="form form__add-post form__add-post--edit-user">
        {/* Change picture */}
        <Input 
            onChangeHandler={onChangeHandler}
            label={"Username :"}
            value={user.name}
            htmlFor={"name"}
          />
          <Input 
            onChangeHandler={onChangeHandler}
            label={"Email :"}
            value={user.email}
            htmlFor={"email"}
          />
          <Input 
            onChangeHandler={onChangeHandler}
            label={"Age :"}
            value={user.age}
            htmlFor={"age"}
          />
          <button 
            type="submit" 
            className="btn btn__submit"
            onClick={(e) => {e.preventDefault(); onChangeUser(user)}}
            >
            Submit
          </button>
        </form> 
        {/* Write some code for forgot password */}
        <NavLink className="link link__forgot-password">Forgot Password?</NavLink>  
      </div>
    )
  } else {
    return (
      <h2>There is no user with these credentials</h2>
    )
  }
  
}

const Input = ({onChangeHandler, label, value, htmlFor}) => {
  return (
    <div className="form__input-wrapper form__input-wrapper--edit-user">
      <label className="form__label form__label--edit-user" htmlFor={htmlFor}>{label}</label>
      <input 
        name={htmlFor}
        className="form__input form__input--edit-user" 
        id={htmlFor}
        onChange={onChangeHandler}
        value={value}
        ></input>
    </div>
  )
}

export default EditUser;