import React from 'react';
import Hero from '../components/Hero';
import SectionsDivider from '../components/SectionsDivider';
import RowOfCards from '../components/RowOfCards';
import Carousel from '../components/Carousel';

const firstRow = [
  {
    id: 1,
    title: 'Excursions',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/excursions.jpg'
  },
  {
    id: 2,
    title: 'Sunset Cruise',
    description: 'A sunset cruise is the most relaxing tour ever. Is perfect if you wish to spend just few hours cruising along the Amalfi Coast',
    imgUrl: '../img/cards/sunset.jpg'
  },
  {
    id: 3,
    title: 'Wedding Proposal',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/wedding.jpg'
  },
  {
    id: 4,
    title: 'Diving Center',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/diving.jpg'
  }
];

const secondRow = [
  {
    id: 1,
    title: 'Serena',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/boat-1.jpg'
  },
  {
    id: 2,
    title: 'Azzurra',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/boat-2.jpg'
  },
  {
    id: 3,
    title: 'Luna',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/boat-3.jpg'
  },
  {
    id: 4,
    title: 'Stella',
    description: 'A selection of group excursions will give you the opportunity to immerse yourself at 360 degrees in our territory',
    imgUrl: '../img/cards/boat-4.jpg'
  }
];

const images = [
  {
    id: 1,
    name: 'Faraglioni',
    url: '/img/home/carousel/1-faraglioni.jpg'
  },
  {
    id: 2,
    name: 'Sub',
    url: '/img/home/carousel/3-sub.jpg'
  },
  {
    id: 3,
    name: 'PositanoNotte',
    url: '/img/home/carousel/4-posnotte.jpg'
  },
  {
    id: 4,
    name: 'Diving',
    url: '/img/home/carousel/5-diving.jpg'
  },
  {
    id: 5,
    name: 'FaraglioniAerea',
    url: '/img/home/carousel/apreaCapri.jpg'
  },
  {
    id: 6,
    name: 'PositanoGiorno',
    url: '/img/home/carousel/6-posgiorno.jpg'
  },
  {
    id: 7,
    name: 'Faraglioniverticale',
    url: '/img/home/carousel/7-faraglionivert.jpg'
  }

];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <Hero
        title="BlueSea Charter"
        subtitle="Sailing in the Mediterranean Sea"
        bkgdImgUrl='url("img/home/hero-home.jpg")'
      />
      <SectionsDivider text="Our services" />
      <RowOfCards rowData={firstRow}/>
      <SectionsDivider text="Our boats" />
      <RowOfCards rowData={secondRow}/>
      <SectionsDivider text="Gallery" />
      <Carousel images={images}/>
    </div>
    );
  }
}
