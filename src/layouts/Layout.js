import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import NavHeader from '../components/header/NavHeader';
import Footer from '../components/footer/Footer';
import '../assets/css/Layout.css';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <Fragment>
            <div className="container-full">
                <div className="contact">
                        <p>Contáctanos al (833) 153 9414 o vía email <strong><Link to="/">seridma.servicios@gmail.com</Link></strong></p>
                </div>
                 <Header /> 
                {/* <NavHeader /> */}
                <main>
                    {props.children}
                </main>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Layout;