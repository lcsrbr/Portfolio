import React from 'react';
import { Link } from 'react-router-dom';
import lucasImg from '../../images/me/emoji.png';
import hi from '../../images/me/hi.png';
import curriculo from '../../images/curriculo.pdf';
import * as S from './styles';

function Home() {
  return (
    <S.Main>
      <S.Section>
        <S.TextDiv>
          <p>
            Olá! Meu nome é{' '}
            <S.Span>
              Lucas Moura <img src={hi} alt="hi emoji" />{' '}
            </S.Span>
            <span>e eu sou</span>
          </p>
          <p className=" input line-1 anim-typewriter">Desenvolvedor</p>
          <S.ButtonDiv>
            <a
              href={curriculo}
              target="_blank"
              className="ext"
              rel="noreferrer"
            >
              Baixar Currículo
            </a>
            <Link to="/contact">Entre em Contato</Link>
          </S.ButtonDiv>
        </S.TextDiv>
        <S.Img src={lucasImg} alt="foto " />
      </S.Section>
    </S.Main>
  );
}

export default Home;
