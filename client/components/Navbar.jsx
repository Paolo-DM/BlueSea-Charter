import React from 'react';
import AppContext from '../lib/app-context';
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    const { user, handleSignOut } = this.context;
    return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../img/logo.png"
            className="logo-img"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#excursions">
              Excursions
            </a>
            <a className="nav-link" href="#fleet">
              The Fleet
            </a>
            <a className="nav-link" href="#">
              Wedding Proposal
            </a>
            <a className="nav-link" href="#">
              Diving
            </a>
            <a className="nav-link" href="#">
              Account
            </a>

             { user !== null &&
               <button className="btn btn-sm btn-outline-light sign-btn" onClick={handleSignOut}>
                 Sign out
               </button>
             }
             { user === null &&
               <>
                 <a href="#sign-in" className="btn btn-sm btn-outline-light sign-btn mx-1">
                   Sign In
                 </a>
               </>
             }

          </div>
        </div>
      </div>
    </nav>);
  }
}

Navbar.contextType = AppContext;
