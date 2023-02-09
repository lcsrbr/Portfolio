import React from 'react';
import TechDiv from './styles';
import { ITech } from '../../interfaces';

function index({ img, title }: ITech) {
  return (
    <TechDiv>
      <img src={img} alt={title + 'img'} />
      <p> {title} </p>
    </TechDiv>
  );
}

export default index;
