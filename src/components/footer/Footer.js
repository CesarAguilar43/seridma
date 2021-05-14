import React from 'react';
import { NavLink } from 'react-router-dom';
import { rutas } from '../../config/NavBarRoutes';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <col>Primera columna</col>
                <col>Segunda columna</col>
                <col>Tercera Columna </col>
            </Container>
        </footer>
    );
}

export default Footer;