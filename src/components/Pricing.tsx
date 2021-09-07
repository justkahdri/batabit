import React from "react";

import "../scss/components/pricing.scss";

import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__title-container">
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
      </div>

      <div className="pricing__cards-container">
        <img alt="next table" src={leftArrow} />
        <article className="pricing__price-card price-card">
          <p className="price-card__overbox">Recomendado</p>
          <h3 className="price-card__category">Pago Anual</h3>
          <div className="price-card__content">
            <span className="price-card__tag">99</span>
            <p className="price-card__savings">*Ahorras $129 comparado al plan mensual.</p>
          </div>
          <button className="price-card__btn">Escoger este</button>
        </article>
        <img alt="previous table" src={rightArrow} />
      </div>
    </section>
  );
};

export default Pricing;
