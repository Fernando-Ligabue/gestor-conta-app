import React from "react";
import "../../styles/hero.css";

import heroDarkImage from "../../images_web/dark-heroImage.png";
import heroLightImage from "../../images_web/light-heroImage.png";

const Hero = ({ theme }) => {
  return (
    <section id="home" className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2 className="highlight">
                Gestão transparante e fácil do seu Vivo e Claro Empresas
              </h2>
            </div>
            <p className="description">
              O sistema GestorConta é a uma solução inovadora, extremamente
              flexível e de fácil utilização para você fazer a gestão dos planos
              Vivo e Claro Empresas.
              <br />
              <br />
              <small>
                Atendemos Empresas, Associações e Órgãos Governamentais.
              </small>
            </p>
            <div className="hero__btns">
              {/* <button className="primary__btn">Saiba Mais</button> */}
              <button className="secondary__btn">Saiba Mais</button>
            </div>
          </div>
          <div className="hero__image">
            <img
              src={theme === "light-theme" ? heroLightImage : heroDarkImage}
              alt="Software Gestor Conta"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
