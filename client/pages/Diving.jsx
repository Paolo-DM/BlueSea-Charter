import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Carousel from 'react-bootstrap/Carousel';
import BookNow from '../components/BookNow';
import './Wedding.css';

function Diving(props) {
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
          &ldquo;It’s not the depths we conquer, but ourselves.&ldquo;
        </h2>
      </div>
      <div className="container">
        <h2>Discover the underwater world with an expert instructor</h2>
        <p className="wedding-text">
          Enjoy diving on Amalfi Coast! Come with us on a journey between two
          worlds: landscape and seascape. An unforgettable experience, diving in
          the beautiful surroundings of one of the most famous and beautiful
          coasts of Italy. The experience is suitable for both, certified divers
          and beginners who can join our discovering scuba diving program.
        </p>
        <h2>Tour description</h2>
        <p className="wedding-text">
          The calcareous nature of the Mediterranean area is full of caves,
          grottoes and cavities. Do not miss the shallows offshore, where the
          current and the constant presence of small blue fish is the perfect
          environment to admire our typical fishes such as amberjack, tuna,
          saddled bream, and pilot fish. With a bit of luck, you can admire the
          dolphins who will follow us! Deep into the sea to satisfy different
          interests: Sport, photography, nature and much more.
        </p>
        <h2>Who is the activity for?</h2>
        <p className="wedding-text">
          Scuba diving in Amalfi Coast is an activity for everyone, you only
          need to know how to swim. You will be trained by a PADI professional
          who will instruct you in the basic skills and safety rules for diving.
          Children 10 years and older can also participate.
        </p>
        <div className="row mt-5">
          <div className="col-md-6 h-100">
            <Carousel variant="light">
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/diving/diving1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/diving/diving2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item className="wedding-carousel-item">
                <img
                  className="d-block w-100"
                  src="/img/diving/diving3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">The team</h2>
            <div className="container">
              <p className="wedding-text">
                The team was born from the passion for diving and the desire to
                spread the passion and knowledge of the sea and the seabed of
                the territory of Salerno and the Amalfi Coast. The team consists
                of an experienced team of instructors and dive masters: PADI,
                WASE and SSI that spread and enforce respect for the sea.
              </p>
              <BookNow product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diving;
