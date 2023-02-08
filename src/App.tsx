import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import './styles/global.css';
import './styles/transitions.css';

function App() {
  // eslint-disable-next-line prefer-const
  let location = useLocation();

  return (
    <main>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="transition" timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </main>
  );
}

export default App;
