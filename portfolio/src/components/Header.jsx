import React, { Component } from 'react';
import code from '../images/icons-source-code.png';
import pac from '../images/pac-header.svg';
import coding from '../images/icons-coding.png';

class Header extends Component {
  render() {
    return (
      <header className="container-header">
        <div className="container-name-center">
          <h1 className="title-main-header">PEDRODEV</h1>
          <img src={ code } alt="Ícone de código" />
        </div>
        <div className="container-icons">
          <img className="pac" src={ pac } alt="Animação do pacman" />
          <img className="coding" src={ coding } alt="Ícone laptop com código" />
        </div>
        <div className="container-titles">
          <h1 className="titles-header">SOBRE MIM</h1>
          <hr />
          <h1 className="titles-header">CONHECIMENTOS</h1>
          <hr />
          <h1 className="titles-header">PROJETOS</h1>
        </div>
      </header>
    )
  };
}

export default Header;
