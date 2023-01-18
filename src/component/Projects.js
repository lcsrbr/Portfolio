import React, { Component } from 'react';
import trybewalletImg from '../imgs/trybewallet.png'
import trybetunesImg from '../imgs/trybetunes.png'
import todolistImg from '../imgs/todolist.png'
import triviaImg from '../imgs/trivia.png'
import recipesImg from '../imgs/recipes.png'
import tfcImg from '../imgs/tfcImg.png'
import todoNativeImg from '../imgs/todoNative.png'


class Projects extends Component {
  render() {
    return (
      <section id="projetos">
        <h1>Projetos</h1>
        <div>
        <a href="https://todo-list-ecru-nine.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={todolistImg} alt="imagem todolist" />
          </a>
          <a href="https://trybe-wallet-eta.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={trybewalletImg} alt="imagem trybewallet" />
          </a>
          <a href="https://trivia-nu-gilt.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={triviaImg} alt="imagem trivia" />
          </a>
          <a href="https://trybe-tunes-blond.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={trybetunesImg} alt="imagem trybetunes" />
          </a>
          <a href="https://frontend-production-5124.up.railway.app/leaderboard" target="_blank" className="ext" rel="noreferrer" >
          <img src={tfcImg} alt="imagem TFC" />
          </a>
          <a href="https://recipes-app-red.vercel.app/" target="_blank" className="ext" rel="noreferrer" >
          <img src={recipesImg} alt="imagem recipesApp" />
          </a>
          <a href="https://codesandbox.io/s/misty-river-if9ms1?file=/src/App.js&resolutionWidth=320&resolutionHeight=675" >
          <img src={todoNativeImg} alt="imagem todolistNative" />
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;
