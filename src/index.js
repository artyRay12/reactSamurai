import './index.css';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

export let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'), 
    );
};
    
reRenderEntireTree(store.getState());
serviceWorker.unregister();
