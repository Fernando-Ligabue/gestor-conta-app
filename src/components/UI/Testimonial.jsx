import React from "react";
import "../../styles/testimonial.css";

import Avatar from "../../images_web/profile-placeholder.jpg";

import Slider from "react-slick";

const dataSlider = [
  {
    testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus eius qui commodi, aliquam dolorem voluptatibus
                eligendi vitae enim eveniet quaerat possimus impedit quisquam
                pariatur officiis sequi et repellendus doloremque alias fugit
                aspernatur mollitia architecto dolores!`,
    imgUrl: Avatar,
    name: "John Doe",
    office: "CFO - Empresa 1",
  },
  {
    testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Temporibus eius qui commodi, aliquam dolorem voluptatibus
    eligendi vitae enim eveniet quaerat possimus impedit quisquam
    pariatur officiis sequi et repellendus doloremque alias fugit
    aspernatur mollitia architecto dolores!`,
    imgUrl: Avatar,
    name: "Jane Doe",
    office: "Data Enginner - Empresa 2",
  },
  {
    testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Temporibus eius qui commodi, aliquam dolorem voluptatibus
    eligendi vitae enim eveniet quaerat possimus impedit quisquam
    pariatur officiis sequi et repellendus doloremque alias fugit
    aspernatur mollitia architecto dolores!`,
    imgUrl: Avatar,
    name: "Jimmy Hendrix",
    office: "Developer - Empresa 3",
  },
  {
    testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Temporibus eius qui commodi, aliquam dolorem voluptatibus
    eligendi vitae enim eveniet quaerat possimus impedit quisquam
    pariatur officiis sequi et repellendus doloremque alias fugit
    aspernatur mollitia architecto dolores!`,
    imgUrl: Avatar,
    name: "Bob Marley",
    office: "Product Manager - Empresa 4",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section id="testimonial">
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">O que dizem os nossos clientes!</h6>
          <h2>
            A confiança que nos fez alcançar mais de 8000 linhas telefônicas
            empresariais
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {dataSlider.map((item, index) => (
              <div className="slider__item" key={index}>
                <p className="description">{item.testimonial}</p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={item.imgUrl} alt="Nossos Clientes" />
                  </div>
                  <div>
                    <h5 className="customer__name">{item.name}</h5>
                    <p className="description">{item.office}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
