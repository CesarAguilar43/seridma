import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../assets/css/Layout.css';

function Layout(props) {
    return (
        <Fragment>
            <div className="container-full">
                <div style={{ backgroundColor: '#ccc', color: 'black' }}>Parte para numero de telefono, y plugins para enviar a fb u otra red social</div>
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