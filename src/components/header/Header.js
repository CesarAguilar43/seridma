import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import '../../assets/css/Header.css';
import logoHome from '../../assets/img/Logo-home.png';

const Header = () => {
    return (
        <header className="header">
            <Navbar expand="xl">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="mr-auto">
                        <Link to="/">
                            <Image src={logoHome} className="logoImg" alt="Seridma" />
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