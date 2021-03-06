import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <React.Fragment>
        <nav>
            <div className="nav-wrapper brown lighten-1 px1">
                <a href="/" className="brand-logo">React +Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
)