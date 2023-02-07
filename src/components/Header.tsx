import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

function Header() {
  const [button, setButton] = useState(true);

  return (
    <S.Header>
      <Link to="/">
        <h1>{'<LucasMoura/>'}</h1>
      </Link>

      <S.Button open={button} onClick={() => setButton(!button)}>button</S.Button>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
        <p>☀️</p>
      </nav>
    </S.Header>
  );
}

export default Header;
