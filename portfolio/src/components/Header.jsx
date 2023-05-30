import React, { useState, useEffect } from 'react';
import code from '../images/icons-source-code.png';
import pac from '../images/pac-header.png';
import coding from '../images/icons-coding.png';

function Header() {
  const [handleScroll, setHandleScroll] = useState(0)

  useEffect(() => {
    const bottomBorder = () => {
      setHandleScroll(window.scrollY)

      if (handleScroll > 50) {
        document.querySelector("header").classList.add("header-transform")
      } else {
        document.querySelector("header").classList.remove("header-transform")
      }
    };

    window.addEventListener('scroll', bottomBorder);
  }, [handleScroll]);


  return (
    <header className="container-header">
      <div className="container-name-center">
        <h1 className="title-main-header">PEDRO</h1>
        <h1 className="title-main-header-dev">DEV</h1>
        <img src={ code } alt="Ícone de código" />
      </div>
      <div className="container-icons">
        <img className="pac" src={ pac } alt="Animação do pacman" />
        <img className="coding" src={ coding } alt="Ícone laptop com código" />
      </div>
      <div className="container-titles">
        <a href="#container-home" className="titles-header">INÍCIO</a>
        <a href="#container-profile" className="titles-header">SOBRE</a>
        <a href="#container-skills" className="titles-header">CONHECIMENTOS</a>
        <a href="#container-projects" className="titles-header">PROJETOS</a>
      </div>
    </header>
  )
};

export default Header;
