import React from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import data from './service';
import * as S from './styles';

function Projects() {
  return (
    <S.Main>
      <S.Container>
        {data.map(({ title, description, techs, links, image }, index) => {
          return (
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
