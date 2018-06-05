import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import MyProduct from './containers/MyProduct';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import reduApp from './reducers/combine';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

let store = createStore(reduApp, applyMiddleware(ReduxThunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <Provider store = {store} >
            <Switch>
                <Route exact path="/" component = {Main}/>
                <Route path = "/myproduct" component = {MyProduct}/>
            </Switch>
        </Provider>
    </BrowserRouter>,
    rootElement
)