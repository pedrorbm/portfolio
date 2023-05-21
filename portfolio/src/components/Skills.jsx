import React from 'react';
import astroSkill from '../images/astro-skill.png';
import iconReact from '../images/react-50.png';
import iconJs from '../images/js-50.png';
import iconHtml from '../images/html-50.png';
import iconCss from '../images/css-50.png';
import iconBootstrap from '../images/bootstrap-50.png';
import iconRedux from '../images/redux-50.png';
import iconJest from '../images/jest-50.png';
import iconDocker from '../images/docker-50.png';
import iconMysql from '../images/mysql-50.png';

function Skills() {
  return (
    <div className="container-skills">
      <h1 className="title-skills">CONHECIMENTOS</h1>
      <div className="sub-container-skills">
        <div className="skills-image">
          <img src={ astroSkill } alt="Imagem de um astronauta" className="img-astro-skill" />
        </div>
        <div className="skill-group">
          <div className="skill-group-1">
            <div className="skill">
              <img src={ iconReact } alt="" className="icons" />
              <h4 className="title-skills-group">React</h4>
            </div>
            <div className="skill">
              <img src={ iconJs } alt="" className="icons" />
              <h4 className="title-skills-group">JavaScript</h4>
            </div>
            <div className="skill">
              <img src={ iconHtml } alt="" className="icons" />
              <h4 className="title-skills-group">HTML</h4>
            </div>
            <div className="skill">
              <img src={ iconCss } alt="" className="icons" />
              <h4 className="title-skills-group">CSS</h4>
            </div>
            <div className="skill">
              <img src={ iconBootstrap } alt="" className="icons" />
              <h4 className="title-skills-group">Bootstrap</h4>
            </div>
            </div>
          <div className="skill-group-2">
            <div className="skill">
              <img src={ iconRedux } alt="" className="icons" />
              <h4 className="title-skills-group">Redux</h4>
            </div>
            <div className="skill">
              <img src={ iconJest } alt="" className="icons" />
              <h4 className="title-skills-group">Jest</h4>
            </div>
            <div className="skill">
              <img src={ iconDocker } alt="" className="icons" />
              <h4 className="title-skills-group">Docker</h4>
            </div>
            <div className="skill">
              <img src={ iconMysql } alt="" className="icons" />
              <h4 className="title-skills-group">MySQL</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
