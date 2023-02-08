import React from 'react';
import * as S from './styles';

interface IProjCard {
  title: string;
  description: string;
  techs: string[];
  link: string;
  image: string;
}

function ProjectsCard({ title, description, techs, link, image }: IProjCard) {
  return (
    <S.Div>
      <h1>{title}</h1>
      <img src={image} />
      <S.Infos className="card">
        <p>{description}</p>
        <p>{techs}</p>
        <a href={link}>saiba mais</a>
      </S.Infos>
    </S.Div>
  );
}

export default ProjectsCard;
