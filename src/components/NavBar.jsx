import React from "react";
import CardWidget from "./CardWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Hellboy Games</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Inicio <span className="sr-only"></span></a>
      <a className="nav-item nav-link" href="#">Contacto</a>
      <a className="nav-item nav-link" href="#">Mercaderia</a>
      <a className="nav-item nav-link" href="#"><CardWidget></CardWidget></a>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
