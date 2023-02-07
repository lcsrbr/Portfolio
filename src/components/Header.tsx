import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [animated, setAnimated] = useState('container');

  const handleButton = () => {
    setToggle(!toggle);
    setAnimated(animated === 'container' ? 'change container' : 'container');
  };

  return (
    <S.Header>
      <Link to="/">
        <h1>{'<LucasMoura/>'}</h1>
      </Link>

      <S.Nav open={toggle}>
        <button onClick={handleButton} className={animated}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/projetos">Projetos</Link>
          <Link to="/contato">Contato</Link>
          <p>☀️</p>
        </nav>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
