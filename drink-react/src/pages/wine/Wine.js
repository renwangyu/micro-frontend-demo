
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WineImg from './wine.png';

class Wine extends Component {
  render() {
    return (
      <div className="page-wine">
        <h1>这个是酒🍺</h1>
        <Link to="/drink/cola">去可乐</Link>
        <img src={WineImg} />
      </div>
    );
  }
}

export default Wine;
