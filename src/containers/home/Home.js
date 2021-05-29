import React from 'react';
import Layout from '../../layouts/Layout';
import Carousel from '../../components/carousel/Carousel';
import LinksBrands from '../../components/links-brands/Links-Brands';
import { Container, Row, Col, Jumbotron, Card } from 'react-bootstrap';
import '../../assets/css/Home.css';
import seridma01 from '../../assets/img/seridma01.jpeg';
import seridma02 from '../../assets/img/seridma02.jpeg';
import seridma03 from '../../assets/img/seridma03.jpeg';

function Home() {
    return (
        <Layout>
            <Carousel />
            <Container fluid className="container-wrapper">
                <Row xs={12} lg={12}>
                    <LinksBrands />
                </Row>
                <Row xs={12} lg={12}>
                    <Col xs={12} lg={12}>
                        <Jumbotron fluid className="title">
                            <Container>
                                <p>¡SANITIZACIÓN Y LIMPIEZA</p>
                                <p>
                                    CONTRA COVID 19!
                                    </p>
                            </Container>
                        </Jumbotron>
                        <Card body className="paragraph">
                            <p>Nuestro servicio engloba todas las labores de limpieza necesarias
                            para la conservación, protección y mantenimiento de instalaciones.</p>
                            SERIDMA diseña, implanta y ejecuta un servicio de calidad, lo que
                        garantiza un nivel óptimo de limpieza e higiene y todos los productos utlizados para la
                        limpieza son biodegradables.</Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4}>
                        <Card className="cards">
                            <Card.Img variant="top" src={seridma01} className="cardsImage" />
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum tortor nec posuere elementum. Curabitur pellentesque feugiat euismod. Suspendisse gravida a quam non ultricies.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Card className="cards">
                            <Card.Img variant="top" src={seridma03} className="cardsImage" />
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum tortor nec posuere elementum. Curabitur pellentesque feugiat euismod. Suspendisse gravida a quam non ultricies.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4}>
                        <Card className="cards">
                            <Card.Img variant="top" src={seridma02} className="cardsImage" />
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum tortor nec posuere elementum. Curabitur pellentesque feugiat euismod. Suspendisse gravida a quam non ultricies.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;