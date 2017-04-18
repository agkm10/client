import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from "./containers/App/index";
import store from './store'
import { Provider } from "react-redux";



ReactDOM.render(

  <BrowserRouter>
    <Provider store={ store }>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);
