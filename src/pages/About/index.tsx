import React from 'react';
import * as S from './styles';
import img from '../../images/foto.jpeg';
import css from '../../images/css.svg';
import docker from '../../images/docker.png';
import github from '../../images/github.svg';
import html from '../../images/html.svg';
import jest from '../../images/jest.png';
import js from '../../images/js.svg';
import linux from '../../images/linux.png';
import mongo from '../../images/mongo.png';
import mysql from '../../images/mysql.png';
import node from '../../images/node.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import rtl from '../../images/rtl.png';
import styled from '../../images/styled.png';
import ts from '../../images/ts.png';
import TechDiv from '../../components/Technologies';

function About() {
  return (
    <S.Main>
      <S.Container>
        <S.ImgText>
          <img src={img} alt="lucas pic" />
          <S.Text>
            <p>
              <span>Meu nome é Lucas, </span>moro em Belo Horizonte (Minas
              Gerais, Brasil) e sou formado em Administração de Empresas. Sou
              casado, amo música, gatos, jogos e uma boa conversa sobre os mais
              diversos assuntos. Atualmente estou em migração de carreira,
              estudando Desenvolvimento Web na Trybe.
            </p>
            <p>
              Já trabalhei como call center, vendedor, assistente
              administrativo, e nos últimos sete anos atuei como analista de
              seguros. Por onde passei deixei melhorias e otimizações nas
              rotinas operacionais, além de manter um ótimo contato com os
              clientes. Vi na área de programação a possibilidade de utilizar
              minha criatividade, cooperação, curiosidade e foco para criar
              soluções sob medida baseadas nos problemas de mercado, o que
              encaixa perfeitamente naquilo que fiz durante toda minha vida
              profissional.
            </p>
            <p>
              Meu desejo é unir minhas experiências passadas com essa poderosa
              ferramenta que é o Desenvolvimento Web. Acredito que estamos
              vivendo tempos de grandes mudanças e que é fundamental que as
              percepções de mundo se atualizem. Enquanto programador eu ajudo as
              pessoas a encontrarem a melhor solução para os problemas atuais e
              que ainda irão surgir.
            </p>
          </S.Text>
        </S.ImgText>
        <S.Techs>
          <h1>Tecnologias</h1>
          <section>
            <TechDiv img={css} title="Css" />
            <TechDiv img={docker} title="Docker" />
            <TechDiv img={github} title="Github" />
            <TechDiv img={html} title="HTML" />
            <TechDiv img={jest} title="Jest" />
            <TechDiv img={js} title="JavaScript" />
            <TechDiv img={linux} title="Linux" />
            <TechDiv img={mongo} title="Mongo" />
            <TechDiv img={mysql} title="MySQL" />
            <TechDiv img={node} title="Node.JS" />
            <TechDiv img={react} title="React.JS" />
            <TechDiv img={redux} title="Redux" />
            <TechDiv img={rtl} title="RTL" />
            <TechDiv img={styled} title="Styled Components" />
            <TechDiv img={ts} title="TypeScript" />
          </section>
        </S.Techs>
      </S.Container>
    </S.Main>
  );
}

export default About;
