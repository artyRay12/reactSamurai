import './index.css';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/state';

export let reRenderEntireTree = state => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root'),
    );
};

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);

serviceWorker.unregister();
