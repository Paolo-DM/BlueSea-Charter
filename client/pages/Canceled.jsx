import React from 'react';
import './Success.css';

function Canceled() {
  return (
    <div className='order-status-container col-md-6 my-4 d-flex flex-column align-items-center'>
      <div className='checkmark-div d-flex justify-content-center align-items-center' >
        <i className="fail-checkmark">X</i>
      </div>
      <h1>Transaction Aborted</h1>
      <p>Something went wrong with the payment</p>
      <p>Please try again!</p>
    </div>
  );
}

export default Canceled;
