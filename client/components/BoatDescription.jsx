import React from 'react';
import './Boat.css';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

function BoatDescription(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="col-md-6 col-sm-12">
      <div className="boat-text-container container">
        <h3 className="text-center">{props.name}</h3>
        <p className="card-text">
          <span className="font-weight-bold">Model:</span> {props.model}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Max.speed:</span> {props.speed}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Length:</span> {props.length}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">People capacity:</span> {props.capacity}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Bed places:</span> {props.beds}
        </p>
        <p className="card-text">
          <span className="font-weight-bold">WC:</span> 1
        </p>
        <p className="card-text">
          <span className="font-weight-bold">Kitchen:</span> {props.kitchen}
        </p>
        <Button className="btn btn-secondary boat-gallery-btn mx-auto mb-1" onClick={() => setModalShow(true)} >
        Gallery
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imageurl={props.imageUrl}
        boat={props.name}
        internal1={props.internal1}
        internal2={props.internal2}
        internal3={props.internal3}
      />
      </div>
    </div>
  );
}

export default BoatDescription;
