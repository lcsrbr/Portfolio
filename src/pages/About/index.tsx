import React from 'react';
import * as S from './styles';
// import img from '../../images/me/light.jpeg';
import TechDiv from '../../components/Technologies';
import { techs } from '../../components/Technologies/services';

function About() {
  techs.sort((a, b): any => {
    if (a.name < b.name) {
      return -1;
    }
  });

  return (
    <S.Main>
      <S.Container>
        <S.ImgText>
          <S.Img />
          {/* <img src={img} alt="lucas pic" /> */}
          <S.Text>
            <p>
              <span>Meu nome é Lucas, </span>moro em Belo Horizonte (Minas
              Gerais, Brasil) e sou formado em Administração de Empresas. Sou
              casado, amo música, gatos, jogos e uma boa conversa sobre os mais
              diversos assuntos.
            </p>
            <p>
              Já trabalhei como call center, vendedor, assistente
              administrativo, e nos últimos sete anos atuei como analista de
              seguros. Por onde passei deixei melhorias e otimizações nas
              rotinas operacionais, além de manter um ótimo contato com os
              clientes.
            </p>
            <p>
              Vi na área de programação a possibilidade de utilizar as
              habilidades desenvolvidas nas profissões anteriores para criar
              soluções sob medida baseadas nos problemas de mercado.
            </p>
          </S.Text>
        </S.ImgText>
        <S.Techs>
          <h1>Tecnologias</h1>
          <section>
            {techs.map((tech: any, index: any) => {
              return <TechDiv key={index} img={tech.image} title={tech.name} />;
            })}
          </section>
        </S.Techs>
      </S.Container>
    </S.Main>
  );
}

export default About;
