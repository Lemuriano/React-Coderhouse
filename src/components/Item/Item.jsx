import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Item.css';

export const Item = ({item})=>{
    const {Id, Nombre, Valor, ImagenCard, DesCorta, Destino} = item
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>{Destino}</Card.Header>
                <Card.Img className="img-thumbnail" variant="top" src={ImagenCard} />
                <Card.Title>{Nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${Valor}</Card.Subtitle>
                <Card.Text>
                    {DesCorta}
                </Card.Text>
                <Link to={`/destinos/${Id}`}>
                    <Button variant="primary">Ver detalle...</Button>
                </Link>
            </Card.Body>
        </Card>
        )
}