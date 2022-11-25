import * as React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        LAGOON
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">
            Accueil
          </a>
          <a className="nav-link" href="#">
            Bungalows
          </a>
          <a className="nav-link" href="#">
            Activites
          </a>
          <a className="nav-link" href="#">
            Locations
          </a>
          <a className="nav-link" href="#">
            Services
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
