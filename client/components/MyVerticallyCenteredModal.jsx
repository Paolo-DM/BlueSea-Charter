import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalGallery.css';

function MyVerticallyCenteredModal(props) {
  console.log('MODAL:', props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.boat}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container gallery-container'>
          <div className="row">
            <div className='col-md-4'>
              <img
                className="modal-gallery-img rounded w-100 h-100"
                src={props.internal1}
              ></img>
            </div>
            <div className='col-md-4'>
              <img
                className="modal-gallery-img rounded w-100 h-100"
                src={props.internal2}
              ></img>
            </div>
            <div className='col-md-4'>
              <img
                className="modal-gallery-img rounded w-100 h-100"
                src={props.internal3}
              ></img>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn-secondary' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
