import React from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import data from './service';
import * as S from './styles';
import { IProjCard } from '../../interfaces';
function Projects() {
  return (
    <S.Main>
      <S.Container>
        {data.map(({ title, description, techs, links, image }, index) => {
          return (
            // <div key={index}>
            //   {techs.map((tech, index) => (
            //     <p key={index}>{tech.name}</p>
            //   ))}
            // </div>
            <ProjectsCard
              key={index}
              title={title}
              description={description}
              techs={techs}
              links={links}
              image={image}
            />
          );
        })}
      </S.Container>
    </S.Main>
  );
}

export default Projects;
