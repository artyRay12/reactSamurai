import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Users from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

/* `aASas` */
const App = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer />
            <Nav />
            <div className="content_wrapper">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />  
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/users" render={() => <Users />} />
                <Route path="/login" render={() => <Login />} />
                
            </div>
        </div>
    );
};

export default App;
