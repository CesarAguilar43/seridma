import { Carousel } from 'react-bootstrap';
import image from '../../assets/img/circuitos.jpeg';
import image2 from '../../assets/img/pexels-pixabay-163100.jpg';
import image3 from '../../assets/img/pexels-pixabay-257736.jpg';
import '../../assets/css/Carousel.css';


const CarouselHome = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={3000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>¿Quienes somos?</h3>
                    <p>Somos una empresa 100% mexicana dedicada a brindar servicios integrales </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image3}
                    alt="Third slide"
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