import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline /> {/* Agrega esta línea para utilizar CssBaseline */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
