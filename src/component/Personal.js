import React, { Component } from 'react';
import lucasImg from '../imgs/Foto.jpeg'
import curriculo from '../imgs/curriculo.pdf'


class Personal extends Component {
  render() {
    return (
      <section className='personal' id="personal">
        <img src={lucasImg} alt="foto " />
        <div className='input'>
          <h1 className="line-1 anim-typewriter">Lucas Moura, desenvolvedor Web.</h1>
          </div>
          <a href={curriculo} target="_blank" class="ext" rel="noreferrer">Currículo</a>

  </section>
    );
  }
}

export default Personal;
