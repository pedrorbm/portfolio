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
        <h2 className="titles-header">INÍCIO</h2>
        <h2 className="titles-header">SOBRE</h2>
        <h2 className="titles-header">CONHECIMENTOS</h2>
        <h2 className="titles-header">PROJETOS</h2>
      </div>
    </header>
  )
};

export default Header;