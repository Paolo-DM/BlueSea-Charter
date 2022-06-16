import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import BookNow from '../components/BookNow';

function ExcursionDetails(props) {
  const [product, setProduct] = useState(null);
  const productId = Number(props.productId);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        setProduct(product);
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
      <div className="container pt-4">
        <h1>Why choose {product?.title}</h1>
        <p>
          {product?.longDescription}
        </p>

        <h1>A terrace of Mediterranean colours</h1>
        <p>
          {product?.shortDescription}
        </p>
        <h1>The areas of navigation</h1>
        <p>
          {product?.navigationAreas}
        </p>
      <div className="w-25 mx-auto">
        <BookNow product={product}/>
      </div>
      </div>
    </div>
  );
}

export default ExcursionDetails;
