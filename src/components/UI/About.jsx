import React from "react";
import "../../styles/about.css";
import aboutImg from '../../images_web/aboutUs.png';

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "Inovação",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus veritatis",
  },
  {
    icon: 'ri-customer-service-2-line',
    title: "Suporte 24h/7",
    description: "Equipe altamente qualificada para potencializar resultados.",
  },
  {
    icon: 'ri-team-line',
    title: "Profissionalismo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus veritatis",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 class="subtitle">Porque escolher os nossos serviços?</h6>
            <h3>
              Especialistas em gestão de contas empresariais compartilhadas,
            </h3>

            <h3 class="highlight">
              somos a solução perfeita para otimizar os custos operacionais de
              sua empresa.
            </h3>
            <p className="description about__content-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              necessitatibus veritatis reprehenderit saepe perspiciatis tenetur.
            </p>
            <div className="choose__item-wrapper">
            {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                <span className="choose__us-icon">
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h4 className="choose__us-title">{item.title}</h4>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="about__image">
            <img src={aboutImg} alt="Suporte 24hs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
