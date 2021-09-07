import React from "react";

import logo from "../assets/batabit.svg";
import dollarIcon from "../assets/dollar-sign.svg";
import clockIcon from "../assets/clock.svg";
import eyeIcon from "../assets/eye.svg";
import checkIcon from "../assets/check-circle.svg";
import "../scss/components/features.scss";

const Features = () => {
  const features = [
    {
      title: "Tiempo real",
      description:
        "Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.",
      icon: clockIcon,
    },
    {
      title: "No hay tasas escondidas",
      description:
        "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.",
      icon: eyeIcon,
    },
    {
      title: "Compara monedas",
      description:
        "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.",
      icon: dollarIcon,
    },
    {
      title: "Información confiable",
      description:
        "Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.",
      icon: checkIcon,
    },
  ];

  return (
    <section className="features">
      <img alt="Separador" className="features__divider" src={logo} />
      <div className="features__title-container">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
      </div>
      {features.map(({title, description, icon}) => (
        <article key={title} className="features__item">
          <img alt={title} src={icon} />
          <h3>{title}</h3>
          <p>{description}</p>{" "}
        </article>
      ))}
    </section>
  );
};

export default Features;
