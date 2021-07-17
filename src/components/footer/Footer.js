import React from 'react';
import '../../assets/css/Footer.css';
import logo from '../../assets/img/Logo-home.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row >
                    <Col lg={4} xs={12} id="footerP1">
                        <div className="informacionContacto">
                            <label> <p className="subtitle-footer">CONTACTO</p>
                                Cel. (833) 153 9414 <i className="icon-hover"><FontAwesomeIcon icon={faMobileAlt} size="lg" /></i><br />
                                Tel. (833) 399 4047 <i className="icon-hover"><FontAwesomeIcon icon={faPhoneSquareAlt} size="lg" /></i>
                            </label>
                            <br /><hr />
                            <label><p className="subtitle-footer">CORREO</p>
                                seridma.servicios@gmail.com <i className="icon-hover"><FontAwesomeIcon icon={faEnvelope} size="lg" /></i>
                            </label>
                        </div>
                    </Col>

                    <Col lg={4} xs={12} className="redes-container" id="footerP2" >
                        <ul id="redes">
                            <li><a href="#" className="facebook"><i><FontAwesomeIcon icon={faFacebookF} size="lg" /></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCbS4aaMATiMPm4Rhvimj1BA" className="youtube"><i><FontAwesomeIcon icon={faYoutube} size="lg" /></i></a></li>
                        </ul></Col>

                    <Col lg={4} xs={12} id="footerP3"><Image src={logo} id="logoFooter" fluid /></Col>

                </Row>
            </Container>
            <div id="copyright">Copyright &#169; 2021 Seridma, S de RL de CV. Todos los derechos reservados.</div>
        </footer>
    );
}

export default Footer;