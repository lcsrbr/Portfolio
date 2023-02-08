import React from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import * as S from './styles';

function Projects() {
  return (
    <S.Main>
      <h1>Projetos</h1>
      <S.Container>
        <ProjectsCard
          title={'Todo List App'}
          description={
            'teste teste teste teste teste teste teste teste teste teste teste teste testetestetestetestetesteteste '
          }
          techs={['JavaScript', 'CSS', 'HTML']}
          link={'https://todo-list-ecru-nine.vercel.app/'}
          image={
            'https://portfolio-lcsrbr.vercel.app/static/media/todolist.44070b0f91f895de9b4e.png'
          }
        />
        <ProjectsCard
          title={'Todo List App'}
          description={
            'teste teste teste teste teste teste teste teste teste teste teste teste testetestetestetestetesteteste '
          }
          techs={['JavaScript', 'CSS', 'HTML']}
          link={'https://todo-list-ecru-nine.vercel.app/'}
          image={
            'https://portfolio-lcsrbr.vercel.app/static/media/todolist.44070b0f91f895de9b4e.png'
          }
        />
        <ProjectsCard
          title={'Todo List App'}
          description={
            'teste teste teste teste teste teste teste teste teste teste teste teste testetestetestetestetesteteste '
          }
          techs={['JavaScript', 'CSS', 'HTML']}
          link={'https://todo-list-ecru-nine.vercel.app/'}
          image={
            'https://portfolio-lcsrbr.vercel.app/static/media/todolist.44070b0f91f895de9b4e.png'
          }
        />
        <ProjectsCard
          title={'Todo List App'}
          description={
            'teste teste teste teste teste teste teste teste teste teste teste teste testetestetestetestetesteteste '
          }
          techs={['JavaScript', 'CSS', 'HTML']}
          link={'https://todo-list-ecru-nine.vercel.app/'}
          image={
            'https://portfolio-lcsrbr.vercel.app/static/media/todolist.44070b0f91f895de9b4e.png'
          }
        />
        {/* <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard /> */}
      </S.Container>
    </S.Main>
  );
}

export default Projects;
