import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Carousel from 'react-bootstrap/Carousel';
import BookNow from '../components/BookNow';
import './Wedding.css';

function Wedding(props) {
  const [product, setProduct] = useState(null);
  const productId = Number(props.productId);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);
  return (
    <div>
      <Hero
        title={product?.title}
        subtitle= {product?.subTitle}
        bkgdImgUrl={product?.imageUrl}
      />
      <div className="wedding-quote-container">
        <h2 className="wedding-quote text-center py-4">
          {' '}
          &ldquo;Anyone can catch your eye, but it takes someone special to
          catch your heart.&ldquo;
        </h2>
      </div>
      <div className="container">
        <h2>
          Would you like to surprise your girlfriend, your future wife, your
          loved ones or celebrate a special romantic occasion with us?
        </h2>
        <p className="wedding-text">
          Choose our romantic tour to spend an unforgettable day at sea with us.
          We can sail in the morning or at sunset time in the most romantic
          setting of the Amalfi Coast or Capri and celebrate your love on board!
        </p>
        <h2>What is included?</h2>
        <p className="wedding-text">
          Considering the special occasion you are celebrating with us, we will
          be pleased to offer champagne, and a romantic gourmet surprise.
          Flowers are available upon request.
        </p>
        <h2>Where we will go?</h2>
        <p className="wedding-text">
          You can select your favourite itinerary and departure port, we will
          meet you at the pier, ready to sail. If you need the pick up from the
          port, just let us know.<br></br>
          Basing on your preferences, we can reach the isle of Capri, or sailing
          along the Sorrentine coastline or along the Amalfi Coastline.
        </p>
        <div className="row mt-5">
          <div className="col-md-6 h-100">
            <Carousel variant="light">
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/wedding/wd1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/wedding/wd2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/wedding/wd3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Have a Special Day!</h2>
            <div className="container">
              <p className="wedding-text">
                Drinking Champagne on the bow, toasting to the future with your
                loved, embraced by the nature and lulled by the waves is just a
                little part of your special day.
              </p>
              <BookNow product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
