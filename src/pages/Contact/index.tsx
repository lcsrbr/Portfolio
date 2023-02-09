import React from 'react';
import * as S from './styles';
import linkedin from '../../images/linkedin.svg';
import github from '../../images/github.png';
import punch from '../../images/punch.png';
import gmail from '../../images/gmail.png';

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
          <a
          href="https://www.linkedin.com/in/lucas-moura-ab1b89bb"
          target="_blank"
          className="ext"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
        <a
          href="https://github.com/lcsrbr"
          target="_blank"
          className="ext"
          rel="noreferrer"
        >
              <img src={github} alt="github logo" />
            </a>
            <a
              href="mailto: 93lucasribeiro@gmail.com"
              target="_blank"
              className="ext"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail logo" />
            </a>
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
