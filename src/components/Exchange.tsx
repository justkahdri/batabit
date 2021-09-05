import React from "react";

import bitcoin from "../assets/bitcoin.png";
import trending_up from "../assets/trending-up.svg";
import trending_down from "../assets/trending-down.svg";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

const Exchange = () => {
  const tableData: Currency[] = [
    ["Bitcoin", 1.97],
    ["Ethereum", 0.07],
    ["Ripple", 2.15],
    ["Stellar", 4.96],
  ];
  const options: DateFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const getVector = () => {
    let random = Math.random();

    if (random > 0.5) {
      return <img alt="trending up" src={trending_up} />;
    } else return <img alt="trending down" src={trending_down} />;
  };

  return (
    <section className="exchange">
      <img alt="Bitcoin network" src={bitcoin} />
      <div className="exchange__title-container">
        <h2>Visibilizamos todas las tasas de cambio.</h2>
        <p>
          Traemos información en tiempo real de las casas de cambio y las monedas más importantes
          del mundo.
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
          <p className="exchange__updated exchange__updated--currency">
            <b>Actualizado:</b> {new Date().toLocaleDateString("es-AR", options)}
          </p>
        </div>
        <img alt="previous table" src={rightArrow} />
      </div>
    </section>
  );
};

export default Exchange;
