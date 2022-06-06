import React from 'react';
import './Boat.css';

function BoatImage(props) {
  return (
    <div className="col-md-6 col-sm-12">
      <img
        className="boat-img rounded"
        src={props.imageUrl}
      ></img>
    </div>
  );
}

export default BoatImage;
