import React, { useState } from 'react';

import './Slider.css';

const images = [
  {
    path: "/img/1.jpg",
    alt: "An croissant",
    text: "Some Text"
  },
  {
    path: "/img/2.jpg",
    alt: "An croissant",
    text: "Some Other Text"
  }
];

const Slider = () => {
  const [showSlide, setShowSlide] = useState(0);

  return (
    <section>
      <Slide image={images[showSlide]} >
        <Controls 
          images={images}
          setShowSlide={setShowSlide}
        />
      </Slide>
    </section>
  )
}

const Controls = ({images, setShowSlide}) => {
  return (
    <div className="btn-container">
      {images.map((image, index) => {
        return (
          <button 
            key={`button${index}`}
            type="button"
            onClick={() => setShowSlide(index)}
          ></button>
        )
      })}
      
    </div>
  )
}

const Slide = ({image, children}) => {
  return (
    <>
      <figure>
        <img src={image.path} alt={image.alt}/>
        <figcaption>
          <span>{image.text}</span>
          {children}
        </figcaption>
      </figure>
    </>
  )
}

export default Slider;