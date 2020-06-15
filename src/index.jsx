import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/config';

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
