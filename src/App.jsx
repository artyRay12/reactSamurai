import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = props => {
    return (
        <div className="app_wrapper">
            <Header />
            <Nav />
            <div className="content_wrapper">
                <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsPage} />} />
                <Route path="/profile" render={() => <Profile profileInfo={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
            </div>
        </div>
    );
};

export default App;
