import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
<section id="sobreMim">
    <article>
        <h1>Sobre mim</h1>
        <p>
            Me chamo Lucas Ribeiro Moura, moro em Belo Horizonte (Minas Gerais, Brasil), sou formado em
            Administração de Empresas, e atualmente estudante em Desenvolvimento Web na Trybe!
        </p>
        <p>
        Sou casado, amo música, gatos, jogos e uma boa conversa sobre os mais diversos assuntos!
        </p>
        <p>
            Já trabalhei como call center,vendedor, assistente administrativo, e nos últimos sete anos atuei como
            analista de seguros.
        </p>
        <p>
            Por onde passei deixei melhorias e otimizações nas rotinas operacionais, além de manter um ótimo contato
            com
            os clientes.
        </p>
    </article>
        <div className="tecnologias">
            <h1>Tecnologias</h1>
            <div className="spans">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Redux</span>
                <span>API</span>
                <span>Jest</span>
                <span>RTL</span>
            </div>
        </div>
</section>
    );
  }
}

export default About;
