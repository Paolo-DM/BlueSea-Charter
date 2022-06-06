import React from 'react';
import Hero from '../components/Hero';
import SectionsDivider from '../components/SectionsDivider';
import PhotoGroup from '../components/PhotoGroup';

export default function Excursions(props) {
  return (
    <div>
      <Hero
        title="Excursions"
        subtitle="Discover the  beauty of the coast"
        bkgdImgUrl='url("img/excursions/positano.jpg")'
      />
      <SectionsDivider text="Destinations" />
      <div className="container">
        <PhotoGroup />
      </div>
    </div>
  );
}
