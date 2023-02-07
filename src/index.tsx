import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
