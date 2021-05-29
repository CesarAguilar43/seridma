import React, { Fragment } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Cards from '../cards/Cards';
import InfoCards from './InfoCards';
import '../../assets/css/Links-Brands.css';

const LinksBrands = () => {
    return (
        <Fragment>
            <Container fluid className="card-container-full">
                <Row>
                    <Col xs={12} lg={12}>
                        <CardGroup>
                            {
                                InfoCards.map((elem, i) => {
                                    return (
                                        <Cards img={elem.img} title={elem.title} lnkA={elem.lnk} key={i} />
                                    );
                                })
                            }
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

}

export default LinksBrands;