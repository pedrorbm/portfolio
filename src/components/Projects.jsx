import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import trybetunes from '../images/trybetunes.jpg';
import trybewallet from '../images/trybewallet.jpg';

function Projects() {
  const detailsOne = () => {
    const boxDescription = document.querySelector('.project-description-box-one');
    const otherDescription = document.querySelector('.project-description-box-two');
    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'flex';
      otherDescription.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  const detailsTwo = () => {
    const boxDescription = document.querySelector('.project-description-box-two');
    const otherDescription = document.querySelector('.project-description-box-one');
    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'block';
      otherDescription.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  return (
    <section id="container-projects">
      <h1 className="title-projects">PROJETOS</h1>
      <div className="projects-group-1">
        <div className="projects">
          <div className="project">
            <img src={trybetunes} alt="Imagem do projeto" className="image-project" />
          </div>
          <h2 className="h-project">TrybeTunes: site de músicas</h2>
          <div className="project-box">
            <details>
              <summary className="btnDetails" onClick={detailsOne}>Mais Detalhes</summary>
            </details>
            <div className="project-description-box-one">
              <div className="project-technologies">
                <h3>Tecnologias:</h3>
                <p>React</p>
                <p>React Router</p>
                <p>JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <div className="description">
                <p>
                  Nessa aplicação o usuário é capaz de buscar e reproduzir músicas das mais variadas
                  bandas e artistas utilizando uma API, ouvir prévias de músicas da banda ou artista
                  que procurou, criar uma lista de músicas favoritas, desfavoritar músicas e
                  editar o perfil da pessoa usuária logada.
                </p>
                <p>
                  Neste projeto utilizei os ciclos de vida de um componente React, fiz requisições
                  e consumi os dados vindos de uma API. Utilizei o React Router para criar as rotas
                  e redirecionar para outras páginas.
                </p>
              </div>
            </div>
            <div className="project-box-icons">
              <a href="https://trybetunesprbm.netlify.app/" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={faEye} />
              </a>
              <a href="https://github.com/pedrorbm/project-trybetunes" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={trybewallet} alt="Imagem do projeto" className="image-project" />
          </div>
          <div className="project-box">
            <h2 className="h-project">TrybeWallet: site de finanças</h2>
            <details>
              <summary className="btnDetails" onClick={detailsTwo}>Mais Detalhes</summary>
            </details>
            <div className="project-description-box-two">
              <div className="project-technologies">
                <h3>Tecnologias:</h3>
                <p>React</p>
                <p>Redux</p>
                <p>JavaScript</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <div className="description">
                <p>
                  Nessa aplicação o usuário é capaz de buscar e reproduzir músicas das mais variadas
                  bandas e artistas utilizando uma API, ouvir prévias de músicas da banda ou artista
                  que procurou, criar uma lista de músicas favoritas, desfavoritar músicas e
                  editar o perfil da pessoa usuária logada.
                </p>
                <p>
                  Neste projeto utilizei os ciclos de vida de um componente React, fiz requisições
                  e consumi os dados vindos de uma API. Utilizei o React Router para criar as rotas
                  e redirecionar para outras páginas.
                </p>
              </div>
            </div>
            <div className="project-box-icons">
              <a href="https://trybewalletprbm.netlify.app/" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={faEye} />
              </a>
              <a href="https://github.com/pedrorbm/project-trybewallet" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
