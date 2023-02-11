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
import ts from '../../images/ts.png';
import redux from '../../images/redux.png';
import rtl from '../../images/rtl.png';
import styled from '../../images/styled.png';
import bootstrap from '../../images/bootstrap.svg';
import express from '../../images/express.svg';
import sequelize from '../../images/sequelize.svg';

export const techs = [
  { image: css, name: 'CSS' },
  { image: docker, name: 'Docker' },
  { image: github, name: 'GitHub' },
  { image: html, name: 'HTML' },
  { image: jest, name: 'Jest' },
  { image: js, name: 'JavaScript' },
  { image: linux, name: 'Linux' },
  { image: mongo, name: 'MongoDB' },
  { image: mysql, name: 'MySQL' },
  { image: node, name: 'Node.js' },
  { image: react, name: 'React.js' },
  { image: ts, name: 'TypeScript' },
  { image: redux, name: 'Redux' },
  { image: rtl, name: 'RTL' },
  { image: styled, name: 'Styled Components' },
  { image: express, name: 'Express.js' },
  { image: bootstrap, name: 'Bootstrap' },
  { image: sequelize, name: 'Sequelize.js' },
  { image: react, name: 'React Native' },
];

export const techsGenerator = (param: string[]) => {
  console.log(param);
  return techs.filter(a => param.includes(a.name));
};
