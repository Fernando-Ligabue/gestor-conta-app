import React from "react";
import "../../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter__content">
            <h6 className="subtitle">Novidades</h6>
            <h2>
             Subscreva nossa <span className="highlight">Newsletter</span>
            </h2>
          </div>
          <div className="newsletter__form">
            <input type="email" name="email" placeholder="E-mail" />
            <button className="secondary__btn subscribe__btn">Cadastre-se aqui!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
