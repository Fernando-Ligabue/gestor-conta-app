import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-money-dollar-box-line",
    title: "Ganhe Tempo",
    description: "Gere um faturamento em poucos segundos.",
  },
  {
    icon: "ri-calculator-line",
    title: "Controle Total",
    description: "Saiba exatamente quanto cada usuário gastou.",
  },
  {
    icon: "ri-computer-line",
    title: "Interface Amigável",
    description: "Ferramenta de fácil utilização.",
  },
  {
    icon: "ri-shield-line",
    title: "Suporte Garantido",
    description: "Treinamentos online e ligações gratuítas.",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service__top-content">
          <h6 class="subtitle">De especialistas para todos</h6>
          <h3>
            A ENGAGE IT oferece a você o mais amigável sistema
            para administração de contas VIVO e CLARO empresas.
          </h3>

          <h3 class="highlight">
            Solução e Atendimento de ótima qualidade. É a
            nossa especialidade.
          </h3>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="service__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
