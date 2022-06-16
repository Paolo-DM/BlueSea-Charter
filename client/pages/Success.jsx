import React from 'react';
import './Success.css';

function Success() {
  return (
    <div className='order-status-container col-md-6 my-4 d-flex flex-column align-items-center'>
      <div className='checkmark-div d-flex justify-content-center align-items-center' >
        <i className="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>We received your purchase</p>
      <p>We&apos;ll be in touch shortly!</p>
    </div>
  );
}

export default Success;
