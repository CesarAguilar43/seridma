import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../assets/css/Layout.css';
import { Link }from 'react-router-dom';

function Layout(props) {
    return (
        <Fragment>
            <div className="container-full">
                <div style={{ backgroundColor: '#ccc', color: 'black' }}>
                    <label>
                    <strong>Contáctanos al (833) 153 9414 o vía email <Link>seridma.servicios@gmail.com</Link></strong>
                    </label></div>
                <Header />
                <main>
                    {props.children}
                </main>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Layout;