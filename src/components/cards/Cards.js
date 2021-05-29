import Card from 'react-bootstrap/Card';
import '../../assets/css/Links-Brands.css';

const Cards = ({ img, title, lnkA }) => {
    return (
        <Card className="card-container">
            <Card.Img className="span-img" variant="top" src={img} />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text>
                    {
                        lnkA.map((e, i) => {
                            return (
                                <ul key={i}>
                                    <li className="card-lnk">{e}</li>
                                </ul>
                            );
                        })
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;