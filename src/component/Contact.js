import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
    <div className="contact" id="contact">
      <h1>Contato</h1>
      <div className="contactLinks"> 
      <a href="https://github.com/lcsrbr" target="_blank" class="ext" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/lucas-moura-ab1b89bb" target="_blank" class="ext" rel="noreferrer">LinkedIn</a>
      </div>
 <form action="https://formsubmit.co/93lucasribeiro@gmail.com" method="POST"> 
     <input type="text" name="name" placeholder="nome" required />
     <input type="email" name="email" placeholder="e-mail"/>
     <input type="text" name="text"  placeholder="assunto"/>
     <textarea rows="5" placeholder="conteúdo"/>
     <button type="submit">enviar</button>
</form>
</div>
    );
  }
}

export default Contact;
