import React from "react";
import trybetunes from "../images/trybetunes.jpg";
import trybewallet from "../images/trybewallet.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
  return (
    <div className="container-projects">
      <h1 className="title-projects">PROJETOS</h1>
      <div className="projects-group-1">
        <div className="projects">
          <div className="project">
            <img src={ trybetunes } alt="Imagem do projeto" className="image-project" />
          </div>
          <div className="project-box">
            <h2 className="h-project">TrybeTunes: site de músicas</h2>
            <div className="project-box-icons">
              <a href="https://trybetunesprbm.netlify.app/" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={ faEye } />
              </a>
              <a href="https://github.com/pedrorbm/project-trybetunes" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={ faGithub } />
              </a>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={ trybewallet } alt="Imagem do projeto" className="image-project" />
          </div>
          <div className="project-box">
            <h2 className="h-project">TrybeWallet: site de finanças</h2>
            <div className="project-box-icons">
              <a href="https://trybewalletprbm.netlify.app/" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={ faEye } />
              </a>
              <a href="https://github.com/pedrorbm/project-trybewallet" target="_blank" rel="noopener noreferrer" className="icon-project">
                <FontAwesomeIcon icon={ faGithub } />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;
