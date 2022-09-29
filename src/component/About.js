import React, { Component } from 'react';
import lucasImg from '../imgs/Foto-about.png'


class About extends Component {
    render() {
        return (
            <section id="sobreMim">
                <article>
                <h1>Sobre mim</h1>
                <div className='sobre'>
                <img src={lucasImg} alt="foto " />
                    <p>
                        Me chamo Lucas Ribeiro Moura, moro em Belo Horizonte (Minas Gerais, Brasil), sou formado em
                        Administração de Empresas, e atualmente estudante em Desenvolvimento Web na Trybe!
                    <br/> <br/>
                        Sou casado, amo música, gatos, jogos e uma boa conversa sobre os mais diversos assuntos!
                        Já trabalhei como call center,vendedor, assistente administrativo, e nos últimos sete anos atuei como
                        analista de seguros.
                    <br/> <br/>
                        Por onde passei deixei melhorias e otimizações nas rotinas operacionais, além de manter um ótimo contato
                        com
                        os clientes.
                    </p>
                    </div>
                </article>
                <div className="tecnologias">
                    <h1>Tecnologias</h1>
                    <div className="spans">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>Context API</span>
                        <span>Hooks</span>
                        <span>Jest</span>
                        <span>RTL</span>
                        <span>Docker</span>
                        <span>MySQL</span>
                        <span>Node.js</span>
                    </div>
                </div>
            </section>
            
        );
    }
}

export default About;
