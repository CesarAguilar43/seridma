import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Nav, Navbar } from 'react-bootstrap';
import '../../assets/css/NavBar.css';
import logo from '../../assets/img/LOGO_SERIDMA_HD_SIN_FONDO.png';

const Header = () => {
    return (
        <header className="header">
            <Navbar expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="mr-auto">
                        <Link exact={true} to="/">
                            <img
                                src={logo}
                                width="100px"
                                height="50px"
                                className="d-inline-block align-top"
                                alt="Seridma"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {rutas.map((ruta, i) => {
                            return (
                                <NavLink key={i} exact={true} to={ruta.path} activeClassName="active">{ruta.title}</NavLink>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;