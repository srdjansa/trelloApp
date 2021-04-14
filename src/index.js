import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import store from './store'
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();