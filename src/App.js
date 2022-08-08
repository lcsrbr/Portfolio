import './App.css';
import Header from './component/Header';
import About from './component/About'
import Personal from './component/Personal';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <div className='content'>
      <Personal />
      <Projects />
      <About />
      <Contact />
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
