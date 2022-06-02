import React from 'react';
import Card from './Card';
import './RowOfCards.css';

function RowOfCards(props) {
  return (
    <div className="container">
  <div className="row">
    {
    props.rowData.map(card => {
      return (
        <div key={card.id} className="col-lg-3 col-md-6">
        <Card title={card.title} description={card.description} imgUrl={card.imgUrl}/>
        </div>
      );
    })
  }
  </div>
</div>
  );
}

export default RowOfCards;
