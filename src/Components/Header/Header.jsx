import React from 'react';
import './Header.css';
import logo from './../common/logo/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className="header_wrapper">
            <NavLink to={'/profile/' + props.userId} className="logo_wrap">
                <img src={logo} alt="main picture" className="picture" />
            </NavLink>

            <div className="login_wrap">
                <NavLink to="/login/" className="login">
                    {props.login ? props.login : 'Login'}
                </NavLink>
            </div>

            {(props.userId) && <NavLink to="/login/"  onClick={props.logout} className="login">Logout</NavLink>}
        </header>
    );
};

export default Header;
