import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SectionsDivider from '../components/SectionsDivider';
import BoatDescription from '../components/BoatDescription';
import BoatImage from '../components/BoatImage';

export default function Fleet(props) {
  const [boats, setBoats] = React.useState([]);

  useEffect(() => {
    fetch('/api/fleet')
      .then(response => response.json())
      .then(data => {
        setBoats(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div>
      <Hero
        title="The Fleet"
        subtitle="Comfort and luxury to ensure your day on board is unforgettable"
        bkgdImgUrl='url("img/fleet/hero-fleet.jpg")'
      />
      <SectionsDivider text="Our Boats" />
      {boats.map(boat =>
        boat.boatId % 2 === 0
          ? (
          <div className="border rounded p-3 m-3 bg-light" key={boat.boatId}>
            <div className="row">
              <BoatDescription
                name={boat.name}
                model={boat.model}
                speed={boat.speed}
                length={boat.length}
                capacity={boat.capacity}
                beds={boat.beds}
                kitchen={boat.kitchen}
                internal1={boat.internal1}
                internal2={boat.internal2}
                internal3={boat.internal3}
              />
              <BoatImage imageUrl={boat.imageUrl} />
            </div>
          </div>
            )
          : (
          <div className="border rounded p-3 m-3 bg-light" key={boat.boatId}>
            <div className="row">
              <BoatImage imageUrl={boat.imageUrl} />
              <BoatDescription
                name={boat.name}
                model={boat.model}
                speed={boat.speed}
                length={boat.length}
                capacity={boat.capacity}
                beds={boat.beds}
                kitchen={boat.kitchen}
                internal1={boat.internal1}
                internal2={boat.internal2}
                internal3={boat.internal3}
              />
            </div>
          </div>
            )
      )}
      <SectionsDivider text="Onboard Services" />
      <div className='container'>
        <div className='row pt-4 pb-4'>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-translate service-icon"></i></span> MULTILINGUAL COMMANDER</p>
        </div>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-martini service-icon"></i></span> SOFT DRINKS AND SNACKS</p>
        </div>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-shower service-icon"></i></span> SHOWER</p>
        </div>
        </div>
        <div className='row pb-4'>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-waves service-icon"></i></span> SNORKELLING EQUIPMENT</p>
        </div>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-lifebuoy service-icon"></i></span> SAFETY EQUIPMENTS</p>
        </div>
        <div className='col-md-4 col-sm-6'>
          <p><span><i className="ph-rectangle service-icon"></i></span> BEACH TOWELS</p>
        </div>
        </div>
      </div>
    </div>
  );
}
