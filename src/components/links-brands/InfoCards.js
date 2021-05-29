import { Link } from 'react-router-dom';
import linksBrands01 from '../../assets/img/links-brands01.jpeg';
import linksBrands02 from '../../assets/img/links-brands02.jpeg';
import linksBrands03 from '../../assets/img/links-brands03.jpeg';
import linksBrands04 from '../../assets/img/links-brands04.jpeg';

const InfoCards = [
    {
        title: 'Mantenimiento',
        img: linksBrands01,
        lnk: [
            <Link to="#">Dummy1</Link>,
            <Link to="#">Dummy2</Link>,
        ]
    },
    {
        title: 'Seguridad',
        img: linksBrands02,
        lnk: [
            <Link to="#">Dummy1</Link>,
            <Link to="#">Dummy2</Link>,
            <Link to="#">Dummy3</Link>,
        ]
    },
    {
        title: 'Proteccion',
        img: linksBrands03,
        lnk: [
            <Link to="#">Dummy1</Link>,
            <Link to="#">Dummy2</Link>,
            <Link to="#">Dummy3</Link>,
        ]
    },
    {
        title: 'Eficiencia',
        img: linksBrands04,
        lnk: [
            <Link to="#">Dummy1</Link>,
            <Link to="#">Dummy2</Link>,
            <Link to="#">Dummy3</Link>,
        ]
    }
]

export default InfoCards;