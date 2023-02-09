import React from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import data from './service';
import * as S from './styles';

function Projects() {
  return (
    <S.Main>
      <h1>Projetos</h1>
      <S.Container>
        {data.map(({ title, description, techs, link, image }, index) => {
          return (
            <ProjectsCard
              key={index}
              title={title}
              description={description}
              techs={techs}
              link={link}
              image={image}
            />
          );
        })}
      </S.Container>
    </S.Main>
  );
}

export default Projects;
