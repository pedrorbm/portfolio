import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faReact, faJs, faHtml5, faCss3, faDocker, faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import iconRedux from '../images/redux-60.png';
import iconJest from '../images/jest-60.png';
import iconMysql from '../images/mysql-60.png';
import iconTS from '../images/ts-icon.png';
import iconPython from '../images/python-icon.png';
import iconExpress from '../images/express-icon.png';
import iconGit from '../images/git-icon.png';

const skillsLineOne = [
  <div className="skill">
    <FontAwesomeIcon icon={faReact} className="icons" />
    <h4 className="title-skills-group">React</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faJs} className="icons" />
    <h4 className="title-skills-group">JavaScript</h4>
  </div>,
  <div className="skill">
    <img src={iconTS} alt="Ícone do TypeScript" className="icons" />
    <h4 className="title-skills-group">TypeScript</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faHtml5} className="icons" />
    <h4 className="title-skills-group">HTML</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faCss3} className="icons" />
    <h4 className="title-skills-group">CSS</h4>
  </div>,
  <div className="skill">
    <img src={iconRedux} alt="Ícone do Redux" className="icons" />
    <h4 className="title-skills-group">Redux</h4>
  </div>,
  <div className="skill">
    <img src={iconExpress} alt="Ícone do Redux" className="icons" />
    <h4 className="title-skills-group">Express</h4>
  </div>,
];

const skillsLineTwo = [
  <div className="skill">
    <img src={iconJest} alt="Ícone do Jest" className="icons" />
    <h4 className="title-skills-group">Jest</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faDocker} className="icons" />
    <h4 className="title-skills-group">Docker</h4>
  </div>,
  <div className="skill">
    <img src={iconMysql} alt="Ícone do MySQL" className="icons" />
    <h4 className="title-skills-group">MySQL</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faNodeJs} className="icons" />
    <h4 className="title-skills-group">Node.js</h4>
  </div>,
  <div className="skill">
    <img src={iconGit} alt="Ícone do MySQL" className="icons" />
    <h4 className="title-skills-group">Git</h4>
  </div>,
  <div className="skill">
    <FontAwesomeIcon icon={faGithub} className="icons" />
    <h4 className="title-skills-group">GitHub</h4>
  </div>,
  <div className="skill">
    <img src={iconPython} alt="Ícone do Python" className="icons" />
    <h4 className="title-skills-group">Python</h4>
  </div>,
];

const DURATION = 30000;
const ROWS = 1;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// eslint-disable-next-line react/prop-types
function InfiniteLoopSlider({ children, duration, reverse = false }) {
  return (
    <div
      className="loop-slider"
      style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal',
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="container-skills">
      <h1 className="title-skills">CONHECIMENTOS</h1>
      <div className="sub-container-skills">
        <div className="skill-group">
          <div className="skill-group-1">
            <div className="tag-list">
              {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider
                  duration={random(DURATION - 5000, DURATION + 5000)}
                  reverse={i % 2}
                >
                  {skillsLineOne.map((element) => element)}
                  {skillsLineOne.map((element) => element)}
                  {skillsLineOne.map((element) => element)}
                </InfiniteLoopSlider>
              ))}
              <div className="fade" />
            </div>
          </div>
          <div className="skill-group-2">
            <div className="tag-list">
              {[...new Array(ROWS)].map(() => (
                <InfiniteLoopSlider
                  duration={random(DURATION - 5000, DURATION + 5000)}
                  reverse="reverse"
                >
                  {skillsLineTwo.map((element) => element)}
                  {skillsLineTwo.map((element) => element)}
                  {skillsLineTwo.map((element) => element)}
                </InfiniteLoopSlider>
              ))}
              <div className="fade" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
