import React from 'react';
import { Link } from 'react-router-dom';
import lucasImg from '../../images/emoji.png';
import hi from '../../images/hi.png';
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
          <p className=" input line-1 anim-typewriter">Desenvolvedor Web. </p>
          <S.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </S.Paragraph>
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
