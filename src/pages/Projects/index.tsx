import React from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import * as S from './styles';

function Projects() {
  return (
    <S.Main>
      <h1>Projetos</h1>
      <S.Container>
        <ProjectsCard
          title={'teste'}
          description={
            'teste teste teste teste teste teste teste teste teste teste teste teste '
          }
          techs={'teste teste teste teste teste teste '}
          link={'testetestetestetesteteste'}
          image={'testetestetesteteste'}
        />
        {/* <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard /> */}
      </S.Container>
    </S.Main>
  );
}

export default Projects;
