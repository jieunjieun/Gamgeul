import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reduApp from './reducers/combine';
import { BrowserRouter } from 'react-router-dom';

let store = createStore(reduApp, applyMiddleware(ReduxThunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store} >
            <Main/>
        </Provider>
    </BrowserRouter>,
    rootElement
)