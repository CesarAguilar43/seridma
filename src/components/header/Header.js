import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                                className="d-inline-block align-top logoImg"
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
                        <NavDropdown title="Servicios" id="collasible-nav-dropdown">
                            <Link>Servicio-1</Link>
                            <NavDropdown.Divider />
                            <Link>Servicio-2</Link>
                            <NavDropdown.Divider />
                            <Link>Servicio-3</Link>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;