import React, { useState } from 'react';
import {
  techs as techArr,
  techsGenerator,
} from '../../components/Technologies/services';
import service from '../Projects/service';
import { Main } from './styles';

function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [techs, setTechs]: any[] = useState([]);
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
  console.log(techs);

  const handleTechs = (e: any) => {
    if (e.target.checked) {
      setTechs([...techs, e.target.name]);
    } else {
      const filtered = techs.filter((tech: any) => tech !== e.target.name);
      setTechs(filtered);
    }
  };

  return (
    <Main>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          rows={5}
          placeholder="description"
          onChange={e => setDescription(e.target.value)}
        />
        <section>
          {techArr.map(tech => {
            return (
              <div key={tech.name}>
                <input
                  type="checkbox"
                  name={tech.name}
                  onChange={e => handleTechs(e)}
                />
                <label>{tech.name}</label>
              </div>
            );
          })}
        </section>
        <input
          type="text"
          placeholder="github"
          onChange={e => setGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="website"
          onChange={e => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          onChange={e => setImage(e.target.value)}
        />
        <button type="button" onClick={() => service.push(teste)}>
          Enviar Projeto
        </button>
      </form>
    </Main>
  );
}

export default Admin;
