import React from 'react';
import { Form } from 'react-bootstrap';
import './BookNow.css';

function BookNow() {
  return (
    <div className="booking-container border rounded w-25 mx-auto py-3">
      <div className="d-flex flex-column align-items-center">
        <Form.Group controlId="booking-date">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="booking-date" className='w-100'/>
          <button className="btn btn-danger my-3 w-100">ORDER NOW</button>
        </Form.Group>
      </div>
    </div>
  );
}

export default BookNow;
