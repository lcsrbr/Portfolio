import tfc from '../../images/tfc.png';
import todo from '../../images/todo.png';
import trybewallet from '../../images/trybewallet.png';

export default [
  {
    title: 'Todo List App',
    description:
      'Uma aplicação de lista de tarefas, onde é possivel adicionar, remover, modificar, marcar, entre outras funcionalidades.',

    techs: ['JavaScript', 'CSS', 'HTML', 'Bootstrap'],

    links: {
      github: 'https://github.com/lcsrbr/todo-list',
      website: 'https://todo-list-ecru-nine.vercel.app/',
    },
    image: todo,
  },
  {
    title: 'Trybe Wallet',
    description:
      'Aplicativo para controle de despesas, e conversão das principais moedas.',
    techs: ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'Redux'],

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
    techs: [
      'JavaScript',
      'Node.JS',
      'Express',
      'TypeScript',
      'MySQL',
      'Docker',
      'Sequelize',
    ],

    links: {
      github: 'https://github.com/lcsrbr/TrybeFutebolClube',
      website: 'https://frontend-production-5124.up.railway.app/leaderboard',
    },
    image: tfc,
  },
];
