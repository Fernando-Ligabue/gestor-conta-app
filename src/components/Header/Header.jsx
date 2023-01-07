import React, { useRef, useEffect } from "react";
import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Início",
  },
  {
    path: "#service",
    display: "Serviços",
  },
  {
    path: "#about",
    display: "Sobre Nós",
  },
  // {
  //   path: "#blog",
  //   display: "Blog",
  // },
  {
    path: "#testimonial",
    display: "Opiniões",
  },
];

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <a
              href="https://www.gestorconta.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <h2> GestorConta</h2>
            </a>
          </div>
          {/*======== navigation =========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*======== light-mode =========*/}
          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i class="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i class="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>
          {/*======== end light-mode =========*/}
          <span className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
