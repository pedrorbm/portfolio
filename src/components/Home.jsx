import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import astroProfile from '../images/astro-sobre.png';

function Home() {
  return (
    <div id="container-home">
      <div className="home-content">
        <div className="home-description">
          <h1 className="title-home">Olá, eu sou</h1>
          <h1 className="title-home-name">Pedro Roberto</h1>
          <div className="teste">
            <h1 className="title-home">Atualmente </h1>
            <h1 className="title-home-front typing-animation">Desenvolvedor Front-End</h1>
          </div>
          <p className="p-home">
            <strong>
              A curiosidade ao ver linhas de códigos, me fez despertar o interesse em entender
              a funcionalidade de cada linha e aprender cada vez mais sobre o mundo da programação.
            </strong>
          </p>
          <div className="home-socials">
            <a href="https://github.com/pedrorbm" target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/pedrorbm/" target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/5584994056331?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio." target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="home-image">
          <img src={astroProfile} alt="Imagem de um astronauta" className="img-home" />
        </div>
      </div>
      <div className="div-triangle" />
    </div>
  );
}

export default Home;
