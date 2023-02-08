import React from 'react';
import * as S from './styles';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <S.FooterDiv>
      <div>
        <a
          href="https://github.com/lcsrbr"
          target="_blank"
          className="ext"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-moura-ab1b89bb"
          target="_blank"
          className="ext"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
      </div>
      <p>Desenvolvido por Lucas Moura - 2023</p>
    </S.FooterDiv>
  );
}

export default Footer;
