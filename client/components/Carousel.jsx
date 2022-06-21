import React from 'react';
import './Carousel.css';
import { images } from '../../server/public/img/home/carousel/index';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImg: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.rightClick, 3500);
  }

  pauseResumeInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.rightClick, 3500);
  }

  renderDots() {
    return images.map(image => {
      return <i key={image.id}
                 className={this.state.selectedImg === image.id ? 'ph-circle-fill' : 'ph-circle-bold'}
                 onClick = {() => this.handleClick(image.id)}>
             </i>;
    });
  }

  handleClick(id) {
    this.pauseResumeInterval();
    this.setState({ selectedImg: id });
  }

  rightClick() {
    if (this.state.selectedImg === images.length) {
      this.setState({ selectedImg: 1 });
    } else {
      this.setState({ selectedImg: this.state.selectedImg + 1 });
    }
    this.pauseResumeInterval();
  }

  leftClick() {
    if (this.state.selectedImg === 1) {
      this.setState({ selectedImg: images.length });
    } else {
      this.setState({ selectedImg: this.state.selectedImg - 1 });
    }
    this.pauseResumeInterval();
  }

  render() {
    const selImg = this.state.selectedImg;

    return (
       <div className=' carousel-container '>
         <i className="ph-caret-left-bold left-arrow" onClick={this.leftClick}></i>
         <img className='carousel-img rounded img-fluid' src={images[selImg - 1].url}></img>
         <i className="ph-caret-right-bold right-arrow" onClick={this.rightClick}></i>
         <div key={images.id} className='progress-dots'>
           {this.renderDots()}
         </div>
       </div>
    );
  }

}

export default Carousel;
