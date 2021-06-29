import construction from '../../assets/img/construccion.png';
import { Image, Container } from 'react-bootstrap';

const Construction = () => {
    return (
        <Container fluid className="container-wrapper">
            <Image src={construction} alt="En construcción" style={{ display: 'block', margin: '0 auto', }} />
            <hr />
            <h3 style={{ textAlign: 'center', margin: '0 0' }}>ESTAMOS EN CONSTRUCCIÓN PARA TI...</h3>
            <h5 style={{ textAlign: 'center', margin: '0 0' }}>GRACIAS POR TU PREFERENCIA</h5>
            <br /><br />
        </Container>
    );
}

export default Construction;