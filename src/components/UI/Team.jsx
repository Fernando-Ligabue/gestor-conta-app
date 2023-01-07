import React from "react";
import "../../styles/team.css";

import CEO from "../../images_web/sr-viana2.jpg";
import Placeholder from "../../images_web/profile-placeholder.jpg";

const teamMembers = [
  {
    imgUrl: CEO,
    name: "Guilherme Viana",
    position: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  },
  {
    imgUrl: Placeholder,
    name: "John Doe",
    position: "Team Member 01",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  },
  {
    imgUrl: Placeholder,
    name: "John Doe",
    position: "Team Member 02",
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com"
  },
  // {
  //   imgUrl: Placeholder,
  //   name: "John Doe",
  //   position: "Team Member 03",
  // },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Equipe</h6>
          <h2>
            Reunimos <span className="highlight">os melhores</span>
          </h2>
        </div>
        <div className="team__wrapper">
        {teamMembers.map((item, index) => (
          <div className="team__item" key={index}>
            <div className="team__img">
              <img src={item.imgUrl} alt="CEO - Sr. Viana" />
            </div>
            <div className="team__details">
              <h4>{item.name}</h4>
              <p className="description">{item.position}</p>
              <div className="team__member-social">
                <span>
                <a href={item.linkedin} target="_blank" rel="noreferrer" className="learn__more">
                  <i class="ri-linkedin-line"></i>
                </a>
                </span>
                <span>
                <a href={item.instagram} target="_blank" rel="noreferrer" className="learn__more">
                  <i class="ri-instagram-line"></i>
                </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  );
};

export default Team;
