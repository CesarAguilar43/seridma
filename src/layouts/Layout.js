import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import 'react-floating-whatsapp/dist/index.css'
import '../assets/css/Layout.css';
import { Container, Row, Col } from 'react-bootstrap';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactFBLike from 'react-fb-like';
import FloatingWhatsApp from 'react-floating-whatsapp'
import avatar from '../assets/img/iconoS.jpeg';

function Layout(props) {

    return (
        <Fragment>
            <div className="container-full">
                <Container fluid className="contact">
                    <Row>
                        <Col xs={12} lg={10}>
                            <p>Contáctanos al (833) 153 9414 o vía email <strong style={{color: '#f3270c'}}>seridma.servicios@gmail.com</strong></p>
                        </Col>
                        <Col xs={12} lg={2}>
                            <ReactFBLike size="large" autoLogAppEvents="1" language="es_ES" appId="235343194909371" version="v11.0" layout="button_count" href="https://www.facebook.com/Seridma" />
                        </Col>
                    </Row>
                </Container>
                <Header />
                {/* <NavHeader /> */}
                <main>
                    {props.children}
                </main>

                <MessengerCustomerChat
                    pageId="101668081798341"
                    appId="235343194909371"
                    className="App-messenger"
                />
                <Footer />
                <div className="App">
                    <FloatingWhatsApp
                        phoneNumber="+5218331539414"
                        accountName="Seridma"
                        statusMessage="en línea"
                        chatMessage="Hola, en que podemos ayudarte?"
                        avatar={avatar}
                        className="App"
                        styles={{marginBottom: '100px', marginLeft: '500px'}}
                         />
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;