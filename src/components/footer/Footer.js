import React from 'react';
import logo from '../../assets/img/LOGO_SERIDMA_HD.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row id="footer">

                    <Col xs lg="3"><p>Contacto : <br />
                        Cel. (833) 153 9414 <br />
                        Tel. (833) 399 4047
                        <br />
                    </p>

                        <p>  Correo : <br />
                            <a href="seridma.servicios@gmail.com">seridma.servicios@gmail.com</a></p>
                    </Col>

                    <Col xs lg="2" className="redes-container"><ul>
                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCbS4aaMATiMPm4Rhvimj1BA" class="youtube"><i class="fab fa-youtube"></i></a></li>
                    </ul></Col>

                    <Col xs lg="3" id="col-top"><Image src={logo} rounded /></Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;