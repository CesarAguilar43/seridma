import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Nav, Navbar, Image } from 'react-bootstrap';
import '../../assets/css/Header.css';
import logo from '../../assets/img/LOGO_SERIDMA_HD_SIN_FONDO.png';
import '../../assets/css/NavHeader.css';

const NavHeader = () => {
    return (
        <header className="header">
            <Navbar expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="mr-auto">
                        <Link to="/">
                            <Image src={logo} className="logoImg" alt="Seridma" />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {rutas.map((ruta, i) => {
                            return (
                                <NavLink key={i} exact={true} to={ruta.path} activeClassName="active">{ruta.title}</NavLink>
                            );
                        })}
                        <ul className="nav1">
                            <li>
                                <Link to="#">
                                    Servicios <i class="fas fa-sort-down" />
                                </Link>
                                {/* <i className="fa-solid fa-caret-down"></i> */}
                                <ul>
                                    <li><a href="#">Servicio 1</a></li>
                                    <li><a href="#">Servicio 2</a></li>
                                    <li><a href="#">Servicio 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default NavHeader;