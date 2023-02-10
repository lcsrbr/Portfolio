import React from 'react';
import * as S from './styles';
import punch from '../../images/punch.png';
import Linkedin from '../../components/Links/Linkedin';
import Github from '../../components/Links/Github';
import Gmail from '../../components/Links/Gmail';

function Contact() {
  return (
    <S.Main>
      <S.Container>
        <S.Div>
          <h1>Contato</h1>
          <p>
            Sinta-se a vontade para mandar uma mensagem!{' '}
            <img src={punch} alt="lucas emoji" />{' '}
          </p>

          <p>
            Peço que informe o máximo de informações possíveis para que eu
            também possa te dar o melhor retorno possível.
          </p>
          <S.Links>
            <Linkedin />
            <Github />
            <Gmail />
          </S.Links>
        </S.Div>
        <S.Form
          action="https://formsubmit.co/93lucasribeiro@gmail.com"
          method="POST"
        >
          <p>Enviar uma Mensagem</p>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="text" name="text" placeholder="Assunto" />
          <textarea rows={5} placeholder="Conteúdo" />
          <button type="submit">Enviar</button>
        </S.Form>
      </S.Container>
    </S.Main>
  );
}

export default Contact;
