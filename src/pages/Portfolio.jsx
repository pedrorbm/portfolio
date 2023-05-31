import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export class Portfolio extends Component {
  render() {
    return (
      <div className="container-page">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  };
}

export default Portfolio;
