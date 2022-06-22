import React from 'react';

function Footer() {
  return (
    <>
<div className="mt-5">
  <footer
          className="text-center text-lg-start text-white mt-auto"
          style={{ backgroundColor: '#083b4c' }}
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">BlueSea Charter</h5>

            <p>
              Wonderful cruises on a sailing boat in the Mediterranean to discover the most beautiful destinations.
            </p>
          </div>

          <div className="col-lg-3 col-md-6  mb-4 mb-md-0">
            <h5 className="text-uppercase">Office</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <p>Praiano (SA), Italy</p>
              </li>
              <li>
                <p>Via Poseidone 15,  84010</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacts</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <p>info@blueseacharter.it</p>
              </li>
              <li>
                <p>T. +39 089 1234567</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social</h5>

            <ul className="list-unstyled mb-0" style={{ fontSize: '1.8rem' }}>
              <li>
                <i className="ph-facebook-logo social-icon" ></i>
              </li>
              <li>
                <i className="ph-instagram-logo social-icon"></i>
              </li>

            </ul>
          </div>

        </div>
      </section>

      <hr className="mb-4" />

      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <a href="#sign-up">
            <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button>
          </a>
        </p>
      </section>

      <hr className="mb-0 pb-2" />

    </div>

  </footer>
</div>
    </>
  );
}

export default Footer;
