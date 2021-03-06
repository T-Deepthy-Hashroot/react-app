import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers/';
import thunk from 'redux-thunk';


import { createStore, applyMiddleware } from 'redux';

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,document.getElementById('root')
);
serviceWorker.unregister();