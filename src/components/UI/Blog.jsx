import React from "react";
import "../../styles/blog.css";
import videoImg from "../../images_web/video-placeholder.png";

const blogData = [
    {
        imgUrl: videoImg,
        title: 'Vídeo',
        description: 'Assista o vídeo de apresentação!',
        linkUrl: 'https://www.youtube.com',
    },
    {
        imgUrl: videoImg,
        title: 'Artigos',
        description: 'Artigos publicados',
        linkUrl: 'https://www.youtube.com',
    },
    {
        imgUrl: videoImg,
        title: 'Atualizações',
        description: 'Conheça nossa app',
        linkUrl: 'https://www.youtube.com',
    },
]

const Blog = () => {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Nosso Blog</h6>
          <h2>
            Acompanhe nossas <span className="highlight">novidades!</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
            <h3>{item.title}</h3>
            <div className="blog__img">
              <img src={item.imgUrl} alt="Video de apresentação" />
            </div>
            <p className="description blog__description">
              {item.description}
            </p>
            <div>
              <a href={item.linkUrl} target="_blank" rel="noreferrer" className="learn__more">
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
