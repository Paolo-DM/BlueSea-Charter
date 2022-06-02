import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.imgUrl}
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <a href="#" className="btn btn-outline-secondary">
          More Details
        </a>
      </div>
    </div>
  );
}

export default Card;
