import React, { useEffect, useState} from 'react';
import { getAboutUs, changeAboutUs } from '../data/aboutUsData';

const EditAboutUs = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    getAboutUs().then(res => setAboutUs(res.data));
  },[])  

  const onChangeHandler = e => {
    if (e.target.value != null && e.target.value !== '') {
      let newAboutUs = {
        ...aboutUs,
        [e.target.name]: e.target.value
      }
      setAboutUs(newAboutUs);
    }    
  }

  const onSubmitHandler = e => {
    e.preventDefault(); 
    changeAboutUs(aboutUs);
  }

  if(aboutUs) {
    return (
      <div className="container">
        <form className="form form__add-post">        
          <div className="from__input-wrapper form__textarea-wrapper--add-post">
            <label className="form__label form__label--add-post" htmlFor="text">Text : </label>
            <textarea 
              name="text"
              className="form__textarea form__textarea--add-post" 
              id="text" 
              rows="20"
              onChange={onChangeHandler}
              value={aboutUs.text ? aboutUs.text : ''}
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
}

export default EditAboutUs;