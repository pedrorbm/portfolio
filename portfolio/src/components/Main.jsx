import React, { Component } from 'react';
import Profile from './Profile';
import Skills from './Skills';

class Main extends Component {
  render() {
    return (
      <main>
        <section>
          <Profile />
        </section>
        <section className="main-skills">
          <Skills />
        </section>
      </main>
    )
  };
}

export default Main;
