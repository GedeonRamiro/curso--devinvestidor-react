import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'theme';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider {...{theme}}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


