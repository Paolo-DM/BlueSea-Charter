import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import SectionsDivider from '../components/SectionsDivider';
import RowOfCards from '../components/RowOfCards';
import Carousel from '../components/Carousel';

export default function Home() {
  const [boats, setBoats] = useState([]);
  const [services, setServices] = useState([]);

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

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(categories => {
        setServices(categories);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);

  return (
    <div>
      <Hero
        title="BlueSea Charter"
        subtitle="Sailing in the Mediterranean Sea"
        bkgdImgUrl='url("img/home/hero-home.jpg")'
      />
      <SectionsDivider text="Our services" />
      <RowOfCards data={services}/>
      <SectionsDivider text="Our boats" />
      <RowOfCards data={boats}/>
      <SectionsDivider text="Gallery" />
      <Carousel/>
    </div>
  );

}
