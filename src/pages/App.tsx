import React from "react";

import logo from "../assets/logo.svg";
import bitcoin from "../assets/bitcoin.png";
import trending_up from "../assets/trending-up.svg";
import trending_down from "../assets/trending-down.svg";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

function App() {
  const tableData = [
    ["Bitcoin", 1.97],
    ["Ethereum", 0.07],
    ["Ripple", 2.15],
    ["Stellar", 4.96],
  ];

  const getVector = () => {
    let random = Math.random();

    if (random > 0.5) {
      return <img alt="trending up" src={trending_up} />;
    } else return <img alt="trending down" src={trending_down} />;
  };

  return (
    <div className="App">
      <header className="header">
        <img alt="BataBit Logo" className="header__logo" src={logo} />
        <div className="header__title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas</h1>
          <p>BataBit te ayuda navegar entre los diferentes precios y tendendcias.</p>
          <a className="header__button" href="">
            Conoce nuestros planes <span />
          </a>
        </div>
      </header>
      <main>
        <section className="exchange">
          <img alt="Bitcoin network" src={bitcoin} />
          <div className="exchange__title-container">
            <h2>Visibilizamos todas las tasas de cambio.</h2>
            <p>
              Traemos información en tiempo real de las casas de cambio y las monedas más
              importantes del mundo.
            </p>
          </div>
          <div className="exchange__tables-container">
            <img alt="next table" src={leftArrow} />
            <div className="exchange__table-container">
              <h3>Monedas</h3>
              <table className="exchange__table exchange__table--currency">
                <tbody>
                  {tableData.map(([currency, price]) => (
                    <tr key={currency}>
                      <td>{currency}</td>
                      <td>
                        {price} {getVector()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img alt="previous table" src={rightArrow} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
