import React from 'react';
import * as S from './styles';

interface IProjCard {
  title: string;
  description: string;
  techs: string;
  link: string;
  image: string;
}

function ProjectsCard({ title, description, techs, link, image }: IProjCard) {
  return (
    <S.Div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{techs}</p>
      <img src={image} />
      <a href={link}>saiba mais</a>
    </S.Div>
  );
}

export default ProjectsCard;
