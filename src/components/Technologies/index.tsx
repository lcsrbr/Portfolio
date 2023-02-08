import React from 'react';
import TechDiv from './styles';
interface ITech {
  img: string;
  title: string;
}

function index({ img, title }: ITech) {
  return (
    <TechDiv>
      <img src={img} alt={title + 'img'} />
      <p> {title} </p>
    </TechDiv>
  );
}

export default index;
