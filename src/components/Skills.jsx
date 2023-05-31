import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
  faGithub, faReact, faJs, faHtml5, faCss3, faBootstrap, faDocker, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import iconRedux from '../images/redux-60.png';
import iconJest from '../images/jest-60.png';
import iconMysql from '../images/mysql-60.png';

function Skills() {
  return (
    <div id="container-skills">
      <h1 className="title-skills">CONHECIMENTOS</h1>
      <div className="sub-container-skills">
        <div className="skill-group">
          <div className="skill-group-1">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} className="icons" />
              <h4 className="title-skills-group">React</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJs} className="icons" />
              <h4 className="title-skills-group">JavaScript</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} className="icons" />
              <h4 className="title-skills-group">HTML</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3} className="icons" />
              <h4 className="title-skills-group">CSS</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faBootstrap} className="icons" />
              <h4 className="title-skills-group">Bootstrap</h4>
            </div>
            <div className="skill">
              <img src={iconRedux} alt="" className="icons" />
              <h4 className="title-skills-group">Redux</h4>
            </div>
          </div>
          <div className="skill-group-2">
            <div className="skill">
              <img src={iconJest} alt="" className="icons" />
              <h4 className="title-skills-group">Jest</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faDocker} className="icons" />
              <h4 className="title-skills-group">Docker</h4>
            </div>
            <div className="skill">
              <img src={iconMysql} alt="" className="icons" />
              <h4 className="title-skills-group">MySQL</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faNodeJs} className="icons" />
              <h4 className="title-skills-group">Node.js</h4>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faGithub} className="icons" />
              <h4 className="title-skills-group">GitHub</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="div-triangle" />
    </div>
  );
}

export default Skills;
