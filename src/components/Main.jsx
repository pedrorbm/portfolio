import React from 'react';
import Home from './Home';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';

function Main() {
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
  );
}

export default Main;
