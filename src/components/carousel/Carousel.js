import { Carousel } from 'react-bootstrap';
import image from '../../assets/img/homeCarrusel.png';
import image1 from '../../assets/img/empresa-limpieza-oficinas.jpg';
import image2 from '../../assets/img/pexels-pixabay-163100.jpg';
import '../../assets/css/Carousel.css';


const CarouselHome = () => {
    return (
        <Carousel className="carousel-full">
            <Carousel.Item interval={5000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>¿QUIENES SOMOS NOSOTROS?</h1>
                    <h3>
                    Somos una empresa 100% mexicana, dedicada a brindar servicios 
                    integrales de mantenimiento, distinguidos por nuestra calidad 
                    y buenas practicas al realizar nuestras labores.
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>SERVICIO DE LIMPIEZA Y DESINFECCIÓN</h1>
                    <h3>Para el hogar, comercio, industria u oficina 100% deducible de impuestos, descubre
                        los beneficios que SERIDMA tiene para ti.
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000} className="carousel-item">
                <img
                    className="d-block w-100 carousel-img"
                    src={image2}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome;