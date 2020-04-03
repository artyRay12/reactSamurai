import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav_wrapper">
            <ul className="nav_list">
                <li className="nav_list_item">
                    <NavLink className="nav_list_item_link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav_list_item">
                    <NavLink className="nav_list_item_link" to="/dialogs">
                        Message
                    </NavLink>
                </li>
                <li className="nav_list_item">
                    <NavLink className="nav_list_item_link" to="/music">
                        Music
                    </NavLink>
                </li>
                <li className="nav_list_item">
                    <NavLink className="nav_list_item_link" to="/news">
                        News
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
