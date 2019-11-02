import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk  from 'redux-thunk'
import combineReducers from './reducers/index'
import {BrowserRouter as Router} from 'react-router-dom'

const reducer = combineReducers

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, composeEnhancer(applyMiddleware(thunk))
);



//workaround pulled from stack overflow, because kept getting error, createStore would not take 3 argument)


ReactDOM.render(<Provider store= {store} ><Router> <App /> </Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
