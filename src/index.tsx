import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* history={history} em caso de problema, tipar como history: H.BrowserHistory; */}
      {/* <Router history={history}> */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
