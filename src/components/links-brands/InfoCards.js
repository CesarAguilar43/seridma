import { Link } from 'react-router-dom';
import linksBrands01 from '../../assets/img/links-brands01.jpeg';
import linksBrands02 from '../../assets/img/links-brands02.jpeg';
import linksBrands03 from '../../assets/img/links-brands03.jpeg';
import linksBrands04 from '../../assets/img/links-brands04.jpeg';

const InfoCards = [
    {
        title: 'Limpieza y Desinfección',
        img: linksBrands01,
        lnk: [
            <Link to="#">Limpieza de espacios.</Link>,
            <Link to="#">Sanitización de espacios.</Link>,
        ]
    },
    {
        title: 'Servicios eléctricos',
        img: linksBrands02,
        lnk: [
            <Link to="#">Mantenimiento preventivo y correctivo de motores eléctricos.</Link>,
            <Link to="#">Bobinado de motores.</Link>,
            <Link to="#">Instalación de alumbrado.</Link>,
        ]
    },
    {
        title: 'Suministros',
        img: linksBrands03,
        lnk: [
            <Link to="#">Venta de material eléctrico.</Link>,
            <Link to="#">Venta de motores.</Link>,
            <Link to="#">Venta de rodamientos.</Link>,
        ]
    },
    {
        title: 'Valvulas',
        img: linksBrands04,
        lnk: [
            <Link to="#">Mantenimiento a valvulas.</Link>,
            <Link to="#">Suministro de valvulas.</Link>,
            <Link to="#">Reparación de valvulas.</Link>,
        ]
    }
]

export default InfoCards;