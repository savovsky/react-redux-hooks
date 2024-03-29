import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './scss/index.scss';
import App from './components/App';
import configureStore from './store/configureStore';


const jsx = (
    <Provider store={configureStore()}>
      <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
