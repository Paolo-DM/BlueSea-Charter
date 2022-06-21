import React from 'react';
import Card from './Card';
import './RowOfCards.css';

function RowOfCards(props) {
  return (
    <div className="container">
  <div className="row">
    {
    props.data.map(card => {
      return (
        <div key={card.id} className="col-lg-3 col-md-6">
        <Card title={card.name} description={card.description} imgUrl={card.imageUrl}/>
        </div>
      );
    })
  }
  </div>
</div>
  );
}

export default RowOfCards;
