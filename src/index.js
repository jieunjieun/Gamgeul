import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import index from './reducers/index';

let store = createStore(index);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store} >
        <Main/>
    </Provider>,
    rootElement
)