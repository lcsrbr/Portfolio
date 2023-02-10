import React from 'react';
import * as S from './styles';
import { IProjCard } from '../../interfaces';
import Github from '../Links/Github';
import WebSite from '../Links/WebSite';

function ProjectsCard({ title, description, techs, links, image }: IProjCard) {
  return (
    <S.Div>
      <h2>{title}</h2>
      <S.BgImg src={image} className="img" />
      <S.Infos className="card">
        <S.Desc>{description}</S.Desc>
        <h1>Tecnologias utilizadas:</h1>
        <S.Techs>
          {techs.map((tech, index) => {
            // eslint-disable-next-line prettier/prettier
            return <p key={index}>{tech}</p>
          })}
        </S.Techs>
        <S.Footer>
          <h1>Mais informações: </h1>
          <S.Techs>
            <div>
              <Github param={links.github} /> <p>GitHub</p>
            </div>
            <div>
              <WebSite param={links.website} /> <p>WebSite</p>
            </div>
          </S.Techs>
        </S.Footer>
      </S.Infos>
    </S.Div>
  );
}

export default ProjectsCard;
