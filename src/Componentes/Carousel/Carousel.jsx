import React from 'react';
import classes from './Carousel.module.css';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { images } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required styles

function Carousel() {
  return (
    <div>
      <ResponsiveCarousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {images.map((imageItemLink, index) => (
          <div key={index}>
            <img key={imageItemLink} src={imageItemLink} alt="carousel image" />
          </div>
        ))}
      </ResponsiveCarousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default Carousel;
