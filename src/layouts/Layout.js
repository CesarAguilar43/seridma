import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import '../assets/css/Layout.css';
import { Link } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ReactFBLike from 'react-fb-like';
import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'
function Layout(props) {
    return (
        <Fragment>
            <div className="container-full">
                <div className="contact">
                    <p>Contáctanos al (833) 153 9414 o vía email <strong><Link to="/">seridma.servicios@gmail.com</Link></strong></p>
                    <ReactFBLike size="large" autoLogAppEvents="1" language="ko_KR" appId="235343194909371" version="v11.0" layout="button_count" href="https://www.facebook.com/Seridma" />
                </div>
                <Header />
                {/* <NavHeader /> */}
                <main>
                    {props.children}
                </main>
                <div className="App">
                <FloatingWhatsApp phoneNumber="+528334607645" accountName="Seridma" 
                statusMessage="Disponible" chatMessage="Buen dia,A sus ordenes ¿En que podemos ayudarle?"/>
                </div>
                <MessengerCustomerChat
                    pageId="101668081798341"
                    appId="235343194909371"
                />
                <Footer />
            </div>
        </Fragment>
    );
}

export default Layout;