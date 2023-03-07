import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export class Portfolio extends Component {
  render() {
    return (
      <div className="container-page">
        <Header />
        <Main />
      </div>
    )
  };
}

export default Portfolio;
