import React from 'react';
import { NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {rutas.map((ruta, i) => {
                            return (
                                <li key={i} className="nav-item">
                                    <NavLink exact to={ruta.path}>{ruta.title}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;