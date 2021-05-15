import React, { Fragment } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Layout(props) {
    return (
        <Fragment>
            <div style={{backgroundColor: '#595959'}}>Parte para numero de telefono, y plugins para enviar a fb u otra red social</div>
            <Header />
            <main>
                {props.children}
            </main>     
            <Footer />
        </Fragment>
    );
}

export default Layout;