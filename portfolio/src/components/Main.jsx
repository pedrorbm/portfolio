import React, { Component } from 'react';
import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <Home />
        </section>
        <section>
          <Profile />
        </section>
        <section className="main-skills">
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
      </main>
    )
  };
}

export default Main;
