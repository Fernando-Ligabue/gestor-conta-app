import React from "react";
import "./footer.css";

const quickLinks01 = [
  {
    path: "#",
    display: "Marketing",
  },
  {
    path: "#",
    display: "Analitics",
  },
  {
    path: "#",
    display: "Comercial",
  },
];
const quickLinks02 = [
  {
    path: "#",
    display: "Planos",
  },
  {
    path: "#",
    display: "Suporte",
  },
  {
    path: "#",
    display: "Faturamento",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2> GestorConta</h2>
            <p className="description">Inovação e Flexibilidade</p>
            <p className="small__text description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              eum facilis architecto perferendis.
            </p>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Soluções</div>
            <ul className="quick__links">
              {quickLinks01.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <div className="quick__links-title">Informações</div>
            <ul className="quick__links">
              {quickLinks02.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright {year}, Desenvolvido por FD Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
