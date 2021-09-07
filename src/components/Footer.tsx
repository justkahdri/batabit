import React from "react";

import batabit from "../assets/batabit.svg";
import "../scss/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <a>Linkedin</a>
        <a>Crunchbase</a>
        <a>Hackernews</a>
      </div>
      <div className="footer__copyright">
        <img alt="Copyright logo" src={batabit} />
        <small>® Batatabit {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
