import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Carousel from 'react-bootstrap/Carousel';
import BookNow from '../components/BookNow';
import './Wedding.css';

function Sunset(props) {
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
        subtitle={product?.subTitle}
        bkgdImgUrl={product?.imageUrl}
      />
      <div className="wedding-quote-container">
        <h2 className="wedding-quote text-center py-4">
          {' '}
          &ldquo;The sky broke like an egg into full sunset, and the water
          caught fire.&ldquo;
        </h2>
      </div>
      <div className="container">
        <h2>Unforgettable romantic moment</h2>
        <p className="wedding-text">
          Our boat glides on the water to greet the last light of the dying sun,
          and the horizon glows with gold. It is a magic hour on the Amalfi
          Coast, when day and night meet and merge, and something serene and
          sublime descends upon the shores.⁠ Set sail with us to end the day
          with an aperitif at sunset.
        </p>
        <h2>The golden hour</h2>
        <p className="wedding-text">
          Our sunset tour is an excursion not to be missed, for those in love,
          for nature lovers, for the lovers of stunning beauty, pure hedonists.
          You will enjoy the pleasure of sailing in the warm breeze of the
          evening and enjoy the lights of the many places along the coast where
          you will have fun, be enchanted and fall in love!<br></br>
          When the sun goes down, with the night still young, we&apos;ll toast
          together with an aperitif offered by the skipper!
        </p>
        <h2>A typical sunset tour</h2>
        <p className="wedding-text">
          From 06:00 p.m. onwards, when all the boats return and the ferry rides
          are over, the day gives way to dusk. The sea is calm, the coast is
          reflected in its waters and the church bells above accompany our
          navigation.
        </p>
        <div className="row mt-5">
          <div className="col-md-6 h-100">
            <Carousel variant="light">
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/sunset/sunset1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/sunset/sunset2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/sunset/sunset3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">A magical moment</h2>
            <div className="container">
              <p className="wedding-text">
                In this magical moment we sail along the coast to Positano to
                enjoy the light of the setting sun falling behind the island of
                Capri and an excellent reserve Falanghina Brut. Then we can
                retrace our route along the coast, exploring the waters, or stop
                in one of the romantic restaurants ashore and be pampered with
                the best local and traditional cuisine, while the moon rises in
                the east.
              </p>
              <BookNow product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sunset;
