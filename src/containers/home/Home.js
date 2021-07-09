import React from 'react';
import Layout from '../../layouts/Layout';
import Carousel from '../../components/carousel/Carousel';
import LinksBrands from '../../components/links-brands/Links-Brands';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import '../../assets/css/Home.css';
import seridma01 from '../../assets/img/seridma01.jpeg';
import seridma02 from '../../assets/img/seridma02.jpeg';
import seridma03 from '../../assets/img/seridma03.jpeg';
import HoverImg from '../../components/hover-images/HoverImg';
import banner from '../../assets/img/banner pagina inicio.png';
import bannerMovil from '../../assets/img/banner-pagina-inicio-chica.png';
import bannerMedium from '../../assets/img/banner-pagina-inicio-medium.png';


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
                        <Image src={bannerMedium} className="banner-medium" />
                        <Image src={bannerMovil} className="banner-movil" />
                        <Image src={banner} className="banner" />
                    </Col>
                </Row>
                <Row xs={12} lg={12}>
                    <Col xs={12} lg={12}>
                        <Card body className="paragraph">
                            <p>Nuestro servicio engloba todas las labores de limpieza necesarias
                                para la conservación, protección y mantenimiento de instalaciones.</p>
                            SERIDMA diseña, implanta y ejecuta un servicio de calidad, lo que
                            garantiza un nivel óptimo de limpieza e higiene y todos los productos utlizados para la
                            limpieza son biodegradables.</Card>
                    </Col>
                </Row>
                <Row className="row-image-hover">
                    {/* <Col xs={12} lg={4}>
                        <HoverImg ruteImg={seridma01} altImg="Imagen1" titleImg="Titulo 1" descImg="loremp ipsum" />
                    </Col>
                    <Col xs={12} lg={4}>
                        <HoverImg ruteImg={seridma02} altImg="Imagen1" titleImg="Titulo 2" descImg="loremp ipsum" />
                    </Col>
                    <Col xs={12} lg={4}>
                        <HoverImg ruteImg={seridma03} altImg="Imagen1" titleImg="Titulo 3" descImg="loremp ipsum"/>
                    </Col> */}
                    <Col xs={12} lg={4}>
                        <HoverImg img={bannerMovil} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <HoverImg img={bannerMovil} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <HoverImg img={bannerMovil} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Home;