import React from 'react';
import Linkedin from '../Links/Linkedin';
import Github from '../Links/Github';
import Gmail from '../Links/Gmail';

import * as S from './styles';

function Footer() {
  return (
    <S.FooterDiv>
      <div>
        <Linkedin />
        <Github />
        <Gmail />
      </div>
      <p>Desenvolvido por Lucas Moura © 2023</p>
    </S.FooterDiv>
  );
}

export default Footer;
