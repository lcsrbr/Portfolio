import React, { useState } from 'react';
import {
  techs as techArr,
  techsGenerator,
} from '../../components/Technologies/services';
import { Main } from './styles';

function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techs, setTechs] = useState([]);
  const [github, setGithub] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState('');

  const teste = {
    title,
    description,
    techs: techsGenerator(techs),
    links: {
      github,
      website,
    },
    image,
  };
  return (
    <Main>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <section>
          {techArr.map(tech => {
            return (
              <div key={tech.name}>
                <input type="checkbox" />
                <label>{tech.name}</label>
              </div>
            );
          })}
        </section>
        <input type="text" placeholder="github" />
        <input type="text" placeholder="website" />
        <input type="text" placeholder="image" />
        <input type="text" placeholder="title" />
      </form>
    </Main>
  );
}

export default Admin;
