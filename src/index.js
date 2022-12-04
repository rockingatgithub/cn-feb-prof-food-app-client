import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import { mainReducer } from './reducers';

const store = createStore(mainReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store} >
      <App />
  </Provider>
    

);

