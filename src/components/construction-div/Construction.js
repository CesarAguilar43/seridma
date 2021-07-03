import construction from '../../assets/img/construccion.png';
import { Image, Container, Row, Col } from 'react-bootstrap';

const Construction = () => {
    return (
        <Container fluid className="container-wrapper">
            <Row>
                <Col xs={12} lg={12}>
                    <div style={{ width: '350px', height: 'auto', margin: '0 auto'}}>
                        <Image src={construction} alt="En construcción" style={{width: '100%' }} />
                    </div>
                </Col>
                <Col xs={12} lg={12}>
                    <hr />
                </Col>
                <Col xs={12} lg={12}>
                    <h3 style={{ textAlign: 'center', margin: '0 0' }}>ESTAMOS EN CONSTRUCCIÓN PARA TI...</h3>
                    <h5 style={{ textAlign: 'center', margin: '0 0' }}>GRACIAS POR TU PREFERENCIA</h5>
                    <br /><br />
                </Col>
            </Row>
        </Container >
    );
}

export default Construction;