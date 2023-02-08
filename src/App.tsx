import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';

import './styles/global.css';
import './styles/transitions.css';

function App() {
  const location = useLocation();

  return (
    <main>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="transition" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </main>
  );
}

export default App;
