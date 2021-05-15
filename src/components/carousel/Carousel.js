import { Carousel } from 'react-bootstrap';
import image from '../../assets/img/circuitos.jpeg';
import image2 from '../../assets/img/pexels-pixabay-163100.jpg';
import image3 from '../../assets/img/pexels-pixabay-257736.jpg';
//import '../../assets/css/Carousel.css';


const CarouselHome = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000} style={{
                height: '32rem',
                background: '#000',
                color: 'white',
            }}>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        top: '0',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: '0.5',
                    }}
                />
                <Carousel.Caption>
                    <h3>¿Quienes somos?</h3>
                    <p>Somos una empresa 100% mexicana dedicada a brindar servicios integrales </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{
                height: '32rem',
                background: '#000',
                color: 'white',
            }}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        top: '0',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: '0.5',
                    }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} style={{
                height: '32rem',
                background: '#000',
                color: 'white',
            }}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        top: '0',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: '0.5',
                    }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome;