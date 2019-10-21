
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColaImg from './cola.png';

class Cola extends Component {
  render() {
    return (
      <div className="page-cola">
        <h1>这个是可乐🥤</h1>
        <Link to="/drink/wine">去酒</Link>
        <img src={ColaImg} />
      </div>
    );
  }
}

export default Cola;
