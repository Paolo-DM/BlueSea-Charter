import React from 'react';
import './Hero.css';

function Hero(props) {
  const backgroundImageUrl = props.bkgdImgUrl;
  return (
    <div>
      <div className="hero-img-container" style={{
        backgroundImage: backgroundImageUrl
      }}>

        <div className="hero-text-container" >
          <h1 className="display-3">{props.title}</h1>
          <h4>{props.subtitle}</h4>
        </div>
      </div>
    </div>
  );
}

export default Hero;
