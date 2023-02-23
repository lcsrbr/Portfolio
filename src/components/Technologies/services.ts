import css from '../../images/icons/css.svg';
import docker from '../../images/icons/docker.png';
import github from '../../images/icons/github.svg';
import html from '../../images/icons/html.svg';
import jest from '../../images/icons/jest.png';
import js from '../../images/icons/js.svg';
import linux from '../../images/icons/linux.png';
import mongo from '../../images/icons/mongo.png';
import mysql from '../../images/icons/mysql.png';
import node from '../../images/icons/node.png';
import react from '../../images/icons/react.png';
import ts from '../../images/icons/ts.png';
import redux from '../../images/icons/redux.png';
import rtl from '../../images/icons/rtl.png';
import styled from '../../images/icons/styled.png';
import bootstrap from '../../images/icons/bootstrap.svg';
import express from '../../images/icons/express.svg';
import sequelize from '../../images/icons/sequelize.svg';
import mongoose from '../../images/icons/mongoose.svg';
import flask from '../../images/icons/flask.svg';
import python from '../../images/icons/python.svg';
import pytest from '../../images/icons/pytest.svg';
import railway from '../../images/icons/railway.png';

export const techs = [
  { image: css, name: 'CSS' },
  { image: docker, name: 'Docker' },
  { image: mongoose, name: 'Mongoose' },
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
  { image: python, name: 'Python' },
  { image: pytest, name: 'Pytest' },
  { image: flask, name: 'Flask' },
  { image: railway, name: 'Railway' },
];

export const techsGenerator = (param: string[]) => {
  return techs.filter(a => param.includes(a.name));
};
