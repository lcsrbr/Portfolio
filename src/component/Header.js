import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="inicio">
      <nav>
        <a href="#personal">{'<LucasMoura />'}</a>
        <div>
        <a href="#projetos">projetos</a>
        <a href="#sobreMim">sobre</a>
        <a href="#contact">contato</a>
        </div>
      </nav>
  </header>
    );
  }
}

export default Header;
