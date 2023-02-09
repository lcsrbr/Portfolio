import React from 'react';
import * as S from './styles';
import { IProjCard } from '../../interfaces';

function ProjectsCard({ title, description, techs, links, image }: IProjCard) {
  return (
    <S.Div>
      <h1>{title}</h1>
      <img src={image} />
      <S.Infos className="card">
        <p>{description}</p>
        <S.Techs>
          <p>Tecnologias utilizadas:</p>
          <div>
            {techs.map((tech, index) => {
              // eslint-disable-next-line prettier/prettier
            return <p key={index}>{tech}</p>
            })}
          </div>
        </S.Techs>
        <S.Techs>
          <p>Mais informações: </p>
          <div>
            <a href={links.github}>GitHub</a>
            <a href={links.website}>Web Site</a>
          </div>
        </S.Techs>
      </S.Infos>
    </S.Div>
  );
}

export default ProjectsCard;
