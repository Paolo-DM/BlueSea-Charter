import React from 'react';
import './BookNow.css';

function BookNow(props) {
  const priceId = props.product?.priceId;

  function handleCheckout(event) {
    event.preventDefault();
    fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'x-access-token': window.localStorage.getItem('bluesea-jwt'), 'Content-Type': 'application/json' },

      body: JSON.stringify({ priceId })
    })
      .then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch(error => {
        alert('You need to be logged-in before continuing with your purchase');
        console.error(error);
      });
  }

  return (
    <div className="booking-container border rounded  mx-auto py-3">
      <div className="d-flex flex-column align-items-center">
        <form onSubmit={handleCheckout} >
        <h3 className='align-self-start'>Book Now</h3>
          <div><label htmlFor="booking-date" >Select a date:</label></div>
          <input
            type="date"
            id="booking-date"
            name="booking-date"
          ></input>
          <h4 className='align-self-start pt-3 mb-0'>{props.product?.price} $</h4>
          <button type="submit" className="btn btn-danger my-3 w-100">
            Checkout
          </button>
        </form>
      </div>

    </div>
  );
}

export default BookNow;
