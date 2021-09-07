import React from "react";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img alt="BataBit Logo" className="header__logo" src={logo} />
      <div className="header__title-container">
        <h1>La próxima revolución en el intercambio de criptomonedas</h1>
        <p>BataBit te ayuda navegar entre los diferentes precios y tendendcias.</p>
        <a className="header__button" href="#pricing">
          Conoce nuestros planes <span />
        </a>
      </div>
    </header>
  );
};

export default Header;
