import React from 'react';
import logo from '../../assets/img/Logo.png';
import { Container, Row, Col,Image } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className = "justify-content-md-center" id="footer">
                    <Col xs lg="3" id="col-top"><Image src={logo} width="150px" height="150px" rounded /></Col>
                    <Col xs lg="3"><p>Contacto : <br/>
                        Cel. (833) 153 9414 <br/>
                        Tel. (833) 399 4047
                        <br/>
                    </p>

                    <p>  Correo : <br/>
                        <a href="seridma.servicios@gmail.com">seridma.servicios@gmail.com</a></p>
                    </Col>
                    <Col xs lg="3" className="redes-container"><ul>
                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul></Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;