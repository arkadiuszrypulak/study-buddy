import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'views/App';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AppProviders';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
