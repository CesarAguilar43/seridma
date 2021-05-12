import React, { Fragment } from 'react';
import Header from '../components/header/Header';

function Layout(props) {
    return (
        <Fragment>
            <div>Parte para numero de telefono, y plugins para enviar a fb u otra red social</div>
            <Header />
            <main>
                {props.children}
            </main>
            <footer>
                Footer
            </footer>
            <div>Colocar cosas extra como copyright, el numero de telefono</div>
        </Fragment>
    );
}

export default Layout;