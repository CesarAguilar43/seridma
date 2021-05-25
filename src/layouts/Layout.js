import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>     
            <Footer />
        </Fragment>
    );
}

export default Layout;