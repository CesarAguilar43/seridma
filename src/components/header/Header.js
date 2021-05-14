import React from 'react';
import { NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Container fluid>
                <Navbar bg="light" variant="light" expand="lg">
                    <Nav className="mx-auto">
                        {rutas.map((ruta, i) => {
                            return (
                                <Nav.Link>
                                    <NavLink key={i} exact to={ruta.path}>{ruta.title}</NavLink>
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;