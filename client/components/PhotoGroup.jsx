import React from 'react';
import './PhotoGroup.css';

function PhotoGroup(props) {
  return (
    <div>
      <div className="row photo-row">
          <div className="col-md-6 col-sm-12">
            <div className="card text-white group-img-container h-100 excursion-img">
              <img
                className="card-img img-fluid h-100"
                src="/img/home/carousel/4-posnotte.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Amalfi Coast</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card text-white group-img-container h-100 excursion-img">
              <img
                className="card-img img-fluid h-100"
                src="/img/home/carousel/1-faraglioni.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Capri</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row photo-row">
          <div className="col-md-6 col-sm-12">
            <div className="card text-white group-img-container h-100 excursion-img">
              <img
                className="card-img img-fluid h-100"
                src="/img/excursions/ischia.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Ischia</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card text-white group-img-container h-100 excursion-img">
              <img
                className="card-img img-fluid h-100"
                src="/img/excursions/procida.jpg"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Procida</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PhotoGroup;
