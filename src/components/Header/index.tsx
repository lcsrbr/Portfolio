import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { theme as reduxTheme } from '../../redux/reducer/theme';

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
    const light = {
      theme: 'light',
      background2: '#9f4fa3',
      background1: '#d4ccd6',
      font1: '#020122',
      font3: '#0a0613',
      font2: '#130c25',
    };

    const dark = {
      theme: 'dark',
      font1: '#9f4fa3',
      font2: '#d4ccd6',
      font3: '#020122',
      background1: '#0a0613',
      background2: '#130c25',
    };

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
      dispatch(reduxTheme(colors));
      localStorage.setItem('theme', JSON.stringify(colors));
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
          <S.Switch className="switch" onClick={() => handleTheme()}>
            <input type="checkbox" checked={theme} />
            <span className="slider round"></span>
          </S.Switch>
        </nav>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
