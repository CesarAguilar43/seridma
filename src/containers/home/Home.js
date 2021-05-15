import React from 'react';
import Layout from '../../layouts/Layout';
import Carousel from '../../components/carousel/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/Home.css';

function Home() {
    return (
        <Layout>
            <Carousel />
            <Container>
                <Row xs={12} lg={12}>
                    <Col xs={12} lg={12}>
                        <label className="paragraph">
                            <p>Nuestro servicio engloba todas las labores de limpieza necesarias <br />
                            para la conservación, protección y mantenimiento de instalaciones</p>
                        </label>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;