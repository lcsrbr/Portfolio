import React from 'react';
import * as S from './styles';
import img from '../../images/foto.jpeg';
import TechDiv from '../../components/Technologies';
import { techs } from '../../components/Technologies/services';

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
