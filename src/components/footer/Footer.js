import React from 'react';
import '../../assets/css/Footer.css';
import logo from '../../assets/img/Logo-home.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row >
                    <Col lg={4} xs={12} id="footerP1">
                        <div class="informacionContacto">
                            <p>Contacto : <br />
                                Cel. (833) 153 9414 <br />
                                Tel. (833) 399 4047
                                <br />
                            </p>

                            <p>  Correo : <br />
                                <a href="seridma.servicios@gmail.com">seridma.servicios@gmail.com</a></p>
                        </div>
                    </Col>

                    <Col lg={4} xs={12} className="redes-container" id="footerP2" ><ul id="redes">
                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCbS4aaMATiMPm4Rhvimj1BA" class="youtube"><i class="fab fa-youtube"></i></a></li>
                    </ul></Col>

                    <Col lg={4} xs={12} id="footerP3"><Image src={logo} id="logoFooter" fluid /></Col>

                </Row>
            </Container>
            <div id="copyright">Copyright &#169; 2021 Seridma, S de RL de CV. Todos los derechos reservados.</div>
        </footer>
    );
}

export default Footer;