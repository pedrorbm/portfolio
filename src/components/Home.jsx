import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import astroProfile from '../images/astro-sobre.png';

function Home() {
  return (
    <section id="container-home">
      <section className="home-content">
        <article className="home-description">
          <h1 className="title-home">Olá, sou</h1>
          <h1 className="title-home-name">Pedro Roberto</h1>
          <h1 className="title-home-full">Desenvolvedor Full Stack</h1>
          <p className="p-home">
            <strong>
              A curiosidade ao ver linhas de códigos, despertou em mim o interesse em entender
              a funcionalidade de cada linha e aguçou minha curiosidade em aprender cada vez
              mais sobre o mundo da programação.
            </strong>
          </p>
          <asside className="home-socials">
            <a href="https://github.com/pedrorbm" target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/pedrorobertodev/" target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/5584994056331?text=Ol%C3%A1%2C+vim+pelo+seu+portf%C3%B3lio." target="_blank" rel="noopener noreferrer" className="btn-home">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </asside>
        </article>
        <div className="home-image">
          <img src={astroProfile} alt="Imagem de um astronauta" className="img-home" />
        </div>
      </section>
      <div className="div-triangle" />
    </section>
  );
}

export default Home;
