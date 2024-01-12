import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import trybetunes from '../images/trybetunes.jpg';
import trybewallet from '../images/trybewallet.jpg';
import tfc from '../images/tfc.png';
import storeManager from '../images/store-manager.png';

function Projects() {
  const detailsOne = () => {
    const boxDescription = document.querySelector('.project-description-box-one');
    const otherDescriptionTwo = document.querySelector('.project-description-box-two');
    const otherDescriptionThree = document.querySelector('.project-description-box-three');
    const otherDescriptionFour = document.querySelector('.project-description-box-four');

    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'flex';
      otherDescriptionTwo.style.display = 'none';
      otherDescriptionThree.style.display = 'none';
      otherDescriptionFour.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  const detailsTwo = () => {
    const boxDescription = document.querySelector('.project-description-box-two');
    const otherDescriptionOne = document.querySelector('.project-description-box-one');
    const otherDescriptionThree = document.querySelector('.project-description-box-three');
    const otherDescriptionFour = document.querySelector('.project-description-box-four');

    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'flex';
      otherDescriptionOne.style.display = 'none';
      otherDescriptionThree.style.display = 'none';
      otherDescriptionFour.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  const detailsThree = () => {
    const boxDescription = document.querySelector('.project-description-box-three');
    const otherDescriptionOne = document.querySelector('.project-description-box-one');
    const otherDescriptionTwo = document.querySelector('.project-description-box-two');
    const otherDescriptionFour = document.querySelector('.project-description-box-four');

    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'flex';
      otherDescriptionOne.style.display = 'none';
      otherDescriptionTwo.style.display = 'none';
      otherDescriptionFour.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  const detailsFour = () => {
    const boxDescription = document.querySelector('.project-description-box-four');
    const otherDescriptionOne = document.querySelector('.project-description-box-one');
    const otherDescriptionTwo = document.querySelector('.project-description-box-two');
    const otherDescriptionThree = document.querySelector('.project-description-box-three');
    if (boxDescription.style.display === 'none' || boxDescription.style.display === '') {
      boxDescription.style.display = 'flex';
      otherDescriptionOne.style.display = 'none';
      otherDescriptionTwo.style.display = 'none';
      otherDescriptionThree.style.display = 'none';
    } else {
      boxDescription.style.display = 'none';
    }
  };

  return (
    <section id="container-projects">
      <h1 className="title-projects">PROJETOS</h1>
      <div className="projects-group-one">
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
                  Foi desenvolvido uma carteira de controle de gastos com conversor de moedas
                  utilizando uma API, ao utilizar essa aplicação o usuário é capaz de Adicionar,
                  remover e editar um gasto, visualizar uma tabela com seus gastos e visualizar o
                  total de gastos convertidos para uma moeda de sua escolha.
                </p>
                <p>
                  Neste projeto utilizei o Redux para gerenciamento global, criei um store,
                  reducers, actions, dispatchers em aplicações React e o thunk do redux para
                  actions assíncronas.
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
      <div className="projects-group-two">
        <div className="projects">
          <div className="project">
            <img src={tfc} alt="Imagem do projeto" className="image-project" />
          </div>
          <h2 className="h-project">TFC: API Node</h2>
          <div className="project-box">
            <details>
              <summary className="btnDetails" onClick={detailsThree}>Mais Detalhes</summary>
            </details>
            <div className="project-description-box-three">
              <div className="project-technologies">
                <h3>Tecnologias:</h3>
                <p>TypeScript</p>
                <p>NodeJS</p>
                <p>MySQL</p>
                <p>Docker</p>
                <p>Sequelize</p>
                <p>Mocha</p>
                <p>Chai</p>
                <p>Sinon</p>
                <p>REST</p>
              </div>
              <div className="description">
                <p>
                  Nessa aplicação foi desenvolvido uma `API Node` para um site informativo sobre
                  partidas e classificações de futebol.
                </p>
                <p>
                  Neste projeto utilizei NodeJS para construção de APIs utilizando a lib Express,
                  implementei em TypeScript usando POO e princípios SOLID, utilizei o banco de
                  dados MySQL. Apliquei o conjunto de boas práticas REST e RESTfull, criei Testes
                  de Integração usando as libs mocha, chai, e sinon. Implementei ORMs para
                  manuseio do Banco de Dados (Sequelize), também utilizei o Docker.
                </p>
              </div>
            </div>
            <div className="project-box-icons">
              <a href="https://github.com/pedrorbm/project-tfc" target="_blank" rel="noopener noreferrer" className="icon-project-back">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={storeManager} alt="Imagem do projeto" className="image-project" />
          </div>
          <div className="project-box">
            <h2 className="h-project">Store Manager: API RESTful</h2>
            <details>
              <summary className="btnDetails" onClick={detailsFour}>Mais Detalhes</summary>
            </details>
            <div className="project-description-box-four">
              <div className="project-technologies">
                <h3>Tecnologias:</h3>
                <p>JavaScript</p>
                <p>NodeJS</p>
                <p>Express</p>
                <p>MySQL</p>
                <p>Docker</p>
                <p>Sequelize</p>
                <p>Mocha</p>
                <p>Chai</p>
                <p>Sinon</p>
              </div>
              <div className="description">
                <p>
                  Neste projeto foi desenvolvida uma API RESTful de gerenciamento de vendas
                  no formato dropshipping. Dentro da API é possível criar, visualizar,
                  deletar e atualizar os produtos e as vendas.
                </p>
                <p>
                  A aplicação foi criada utilizando Express.js, o banco de dados MySQL,
                  para a criação da API RESTful utilizei a arquitetura MSC (Model-Service
                  -Controller). Implementei testes unitários utilizando as libs Mocha, Chai,
                  Sinon, também utilizei o Docker.
                </p>
              </div>
            </div>
            <div className="project-box-icons">
              <a href="https://github.com/pedrorbm/project-store-manager" target="_blank" rel="noopener noreferrer" className="icon-project-back">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="more-projects">
        <a href="https://github.com/pedrorbm?tab=repositories" target="_blank" rel="noopener noreferrer">
          Mais Projetos
        </a>
      </div>
    </section>
  );
}

export default Projects;
