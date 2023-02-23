import { techsGenerator } from '../../components/Technologies/services';
import tfc from '../../images/projects/tfc.png';
import todo from '../../images/projects/todo.png';
import trybewallet from '../../images/projects/trybewallet.png';
import trybetunes from '../../images/projects/trybetunes.png';
import trivia from '../../images/projects/trivia.png';
import recipes from '../../images/projects/recipes.png';
import todoNative from '../../images/projects/todoNative.png';
import carshop from '../../images/projects/carshop.png';
import jobInsights from '../../images/projects/jobInsights.png';
import deliveryApp from '../../images/projects/deliveryApp.png';

export default [
  {
    title: 'Todo List App',
    description:
      'Uma aplicação de lista de tarefas, onde é possivel adicionar, remover, modificar, marcar, entre outras funcionalidades.',
    techs: techsGenerator(['JavaScript', 'CSS', 'HTML', 'Bootstrap']),

    links: {
      github: 'https://github.com/lcsrbr/todo-list',
      website: 'https://todo-list-ecru-nine.vercel.app/',
    },
    image: todo,
  },
  {
    title: 'Todo List Native',
    description:
      'Um aplicativo de lista de tarefas simples feita em React Native.',
    techs: techsGenerator(['React Native', 'JavaScript', 'HTML', 'CSS']),
    links: {
      github: 'https://github.com/lcsrbr/todo-native',
      website:
        'https://codesandbox.io/s/misty-river-if9ms1?file=/src/App.js&resolutionWidth=320&resolutionHeight=675',
    },
    image: todoNative,
  },
  {
    title: 'Trybe Wallet',
    description:
      'Aplicativo para controle de despesas, e conversão das principais moedas.',
    techs: techsGenerator([
      'React.js',
      'JavaScript',
      'CSS',
      'HTML',
      'Bootstrap',
      'Redux',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/TrybeWallet',
      website: 'https://trybe-wallet-eta.vercel.app/',
    },
    image: trybewallet,
  },
  {
    title: 'Trybe Futebol Clube',
    description:
      'Site com o objetivo de reunir as informações de um campeonato de Futebol! Acompanhe os placares, pontuações, adicionar e remover partidas.',
    techs: techsGenerator([
      'JavaScript',
      'Node.js',
      'Express.js',
      'TypeScript',
      'MySQL',
      'Docker',
      'Sequelize.js',
      'React.js',
      'Railway',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/TrybeFutebolClube',
      website: 'https://frontend-production-5124.up.railway.app/leaderboard',
    },
    image: tfc,
  },
  {
    title: 'TrybeTunes',
    description:
      'Uma aplicação de música, onde é possível buscar por artista, selecionar álbum, e gerenciar suas músicas favoritas!.',
    techs: techsGenerator([
      'React.js',
      'JavaScript',
      'CSS',
      'HTML',
      'Bootstrap',
      'Redux',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/TrybeTunes',
      website: 'https://trybe-tunes-blond.vercel.app/',
    },
    image: trybetunes,
  },
  {
    title: 'Trivia',
    description:
      'Uma aplicação do clássico jogo de Trivia! É possível se cadastrar, jogar e comparar o placar com os seus amigos!',
    techs: techsGenerator([
      'React.js',
      'JavaScript',
      'CSS',
      'HTML',
      'Bootstrap',
      'Redux',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/Trivia-',
      website: 'https://trivia-nu-gilt.vercel.app/',
    },
    image: trivia,
  },
  {
    title: 'Recipes App',
    description:
      'Um aplicativo de receitas completo, onde é possível iniciar receitas, acompanhar seu progresso, favoritar e compartilhar!',
    techs: techsGenerator([
      'React.js',
      'JavaScript',
      'CSS',
      'HTML',
      'Bootstrap',
      'Redux',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/recipesApp',
      website: 'https://recipes-app-red.vercel.app/',
    },
    image: recipes,
  },
  {
    title: 'Car Shop',
    description:
      'API REST CRUD construída em POO com a finalidade de gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB através do framework do Mongoose.',
    techs: techsGenerator(['TypeScript', 'MongoDB', 'Mongoose', 'Docker']),

    links: {
      github: 'https://github.com/lcsrbr/carShop',
      website:
        'https://documenter.getpostman.com/view/25807192/2s935uG1ML#f225194f-2809-4cbb-80d7-fb4dca32185d',
    },
    image: carshop,
  },
  {
    title: 'Job Insights',
    description:
      'Análises feitas a partir de um conjunto de dados sobre empregos e incorporadas a um aplicativo Web. Os testes foram feitos como garantia de melhor implementação da aplicação.',
    techs: techsGenerator(['Python', 'Pytest', 'Flask']),

    links: {
      github: 'https://github.com/lcsrbr/python-job-insights',
      website: 'https://github.com/lcsrbr/python-job-insights',
    },
    image: jobInsights,
  },
  {
    title: 'Delivery App',
    description:
      'Projeto Full Stack de um aplicativo de entrega, onde é possível se cadastrar, fazer pedidos, acompanhar o status do pedido, entre outras funcionalidades.',
    techs: techsGenerator([
      'JavaScript',
      'Node.js',
      'Express.js',
      'MySQL',
      'Docker',
      'Sequelize.js',
      'React.js',
      'Railway',
    ]),

    links: {
      github: 'https://github.com/lcsrbr/deliveryApp',
      website: 'https://secretive-writer-production.up.railway.app/login',
    },
    image: deliveryApp,
  },
];
