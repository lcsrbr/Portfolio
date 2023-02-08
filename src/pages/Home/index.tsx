import React from 'react';
import lucasImg from '../../images/emoji.png';
import * as S from './styles';

function Home() {
  return (
    <S.Section>
      <img src={lucasImg} alt="foto " />
      <div>
        <p>
          Olá! Meu nome é <span>Lucas Moura</span>
        </p>
        <h1>eu sou</h1>
        <p className=" input line-1 anim-typewriter">Desenvolvedor Web. </p>
        <p>
          Meu desejo é unir minhas experiências passadas com essa poderosa
          ferramenta que é o Desenvolvimento Web. Enquanto programador ainda
          quero ajudar as pessoas a encontrarem a melhor solução para os
          problemas que ainda irão surgir!
        </p>
      </div>
      <button>
        <a href={'/'} target="_blank" rel="noreferrer">
          Currículo
        </a>
      </button>
    </S.Section>
  );
}

export default Home;
