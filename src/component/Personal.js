import React, { Component } from 'react';
import lucasImg from '../imgs/Foto.jpeg'

class Personal extends Component {
  render() {
    return (
      <section className='personal' id="personal">
        <img src={lucasImg} alt="foto " />
        <div className='input'>
          <h1 className="line-1 anim-typewriter">Lucas Moura, desenvolvedor Web.</h1>
          </div>
          <button> Currículo </button>
  </section>
    );
  }
}

export default Personal;
