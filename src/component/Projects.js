import React, { Component } from 'react';
import trybewalletImg from '../imgs/trybewallet.png'
import trybetunesImg from '../imgs/trybetunes.png'
import todolistImg from '../imgs/todolist.png'
import triviaImg from '../imgs/trivia.png'


class Projects extends Component {
  render() {
    return (
      <section id="projetos">
        <h1>Projetos</h1>
        {/* <a href="https://trybe-wallet-eta.vercel.app/">TrybeWallet</a>
          <a href="https://trybe-tunes-blond.vercel.app/">TrybeTunes</a>
          <a href="https://todo-list-ecru-nine.vercel.app/">To-do list</a> */}
        <div>
          <a href="https://trybe-wallet-eta.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={trybewalletImg} alt="imagem trybewallet" />
          </a>
          <a href="https://trybe-tunes-blond.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={trybetunesImg} alt="imagem trybetunes" />
          </a>
          <a href="https://todo-list-ecru-nine.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={todolistImg} alt="imagem todolist" />
          </a>
          <a href="https://trivia-kugpvnmf2-lcsrbr.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={triviaImg} alt="imagem trivia" />
          </a>
          <a href="https://frontend-production-5124.up.railway.app/leaderboard" target="_blank" className="ext" rel="noreferrer" >
          <img src="https://raw.githubusercontent.com/lcsrbr/TrybeFutebolClube/main/imgs/login.png" alt="imagem TFC" />
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
