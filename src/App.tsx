import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, useLocation, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/transitions.css';
import { useSelector } from 'react-redux';
import { RootState } from '../src/redux/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  const colors = useSelector(({ theme }: RootState) => theme.theme);

  const location = useLocation();

  return (
    <main>
      <ThemeProvider theme={colors}>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="transition"
            timeout={300}
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="*" component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </main>
  );
}

export default App;
