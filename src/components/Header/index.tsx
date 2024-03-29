import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { theme as reduxTheme } from '../../redux/reducer/theme';
import { light, dark } from '../../styles/theme';

function Header() {
  const [toggle, setToggle] = useState(false);
  const [animated, setAnimated] = useState('container');
  const [theme, setTheme] = useState(true);
  const dispatch = useDispatch();

  const handleButton = () => {
    setToggle(!toggle);
    setAnimated(animated === 'container' ? 'change container' : 'container');
  };

  const handleTheme = () => {
    const lcSt = localStorage.getItem('theme');
    const localParse = lcSt && JSON.parse(lcSt);

    if (lcSt && localParse.theme === 'dark') {
      dispatch(reduxTheme(light));
      localStorage.setItem('theme', JSON.stringify(light));
    }

    if (lcSt && localParse.theme === 'light') {
      dispatch(reduxTheme(dark));
      localStorage.setItem('theme', JSON.stringify(dark));
    }
    setTheme(!theme);
  };

  useEffect(() => {
    const lcSt = localStorage.getItem('theme');
    const themeLcSt = lcSt && JSON.parse(lcSt);

    console.log(lcSt);
    if (!lcSt) {
      dispatch(reduxTheme(dark));
      localStorage.setItem('theme', JSON.stringify(dark));
    } else {
      dispatch(reduxTheme(themeLcSt));
    }
    if (lcSt && themeLcSt.theme === 'light') {
      setTheme(false);
    }
  }, []);

  return (
    <S.Header>
      <Link to="/">
        <h1>{'<LucasMoura/>'}</h1>
      </Link>
      <S.Nav open={toggle}>
        <S.Switch onClick={() => handleTheme()} />
        <button onClick={handleButton} className={animated}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <nav>
          <Link to="/" onClick={() => handleButton()}>
            Início
          </Link>
          <Link to="/about" onClick={() => handleButton()}>
            Sobre
          </Link>
          <Link to="/projects" onClick={() => handleButton()}>
            Projetos
          </Link>
          <Link to="/contact" onClick={() => handleButton()}>
            Contato
          </Link>
        </nav>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
