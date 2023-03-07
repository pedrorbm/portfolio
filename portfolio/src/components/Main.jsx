import React, { Component } from 'react';
import perfil from '../images/perfil.jpg';

class Main extends Component {
  render() {
    return (
      <main>
        <section className="container-perfil">
          <img className="img-perfil" src={ perfil } alt="Imagem de perfil" />
          <h1>Prazer, sou Pedro Roberto</h1>
        </section>
      </main>
    )
  };
}

export default Main;
