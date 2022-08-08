import React, { Component } from 'react';
import trybewalletImg from '../imgs/trybewallet.png'
import trybetunesImg from '../imgs/trybetunes.png'
import todolistImg from '../imgs/todolist.png'

class Projects extends Component {
  render() {
    return (
      <section id="projetos">
        <h2>Projetos</h2>
        {/* <a href="https://trybe-wallet-eta.vercel.app/">TrybeWallet</a>
          <a href="https://trybe-tunes-blond.vercel.app/">TrybeTunes</a>
          <a href="https://todo-list-ecru-nine.vercel.app/">To-do list</a> */}
        <div>
          <a href="https://trybe-wallet-eta.vercel.app/" target="_blank" class="ext" rel="noreferrer" >
          <img src={trybewalletImg} alt="imagem trybewallet" />
          </a>
          <a href="https://trybe-tunes-blond.vercel.app/" target="_blank" class="ext" rel="noreferrer" >
          <img src={trybetunesImg} alt="imagem trybetunes" />
          </a>
          <a href="https://todo-list-ecru-nine.vercel.app/" target="_blank" class="ext" rel="noreferrer" >
          <img src={todolistImg} alt="imagem todolist" />
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
