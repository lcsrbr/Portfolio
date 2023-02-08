import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [animated, setAnimated] = useState('container');
  const [theme, setTheme] = useState(true);

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
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
          {/* <button > x </button> */}
          <S.Switch className="switch" onClick={() => setTheme(!theme)}>
            <input type="checkbox" checked={theme} />
            <span className="slider round"></span>
            {/* <p className="slider round"></p> */}
          </S.Switch>
        </nav>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
