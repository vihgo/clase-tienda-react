import { Card,Button,Badge } from "react-bootstrap";
import { productos,formatearPrecio } from "../data/productos";

function TarjetaProducto( {producto, onAgregar} ){

    const {nombre,categoria,precio,stock,icono} = producto
    const agotado= stock===0//agotado será un booleano que valdrá true si stock es 0 y false si es distinto de 0
    
    return(
        <Card className="h-100 shadow-sm">
            <div className="icono-producto">{icono}</div>
            <Card.Body className="d-flex flex-column">
                <Badge bg="secondary" className="align-self-start mb-2">
                    {categoria}

                </Badge>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text >{ precio <15000 && <Badge bg="success" className="ms-1 w-25">Oferta</Badge> }</Card.Text>
                <Card.Text className="fs-5 fw-semibold">{formatearPrecio(precio)}</Card.Text>
                <Card.Text className={agotado? 'text-danger':'text-success'}>
                    {agotado? 'Sin stock':`Quedan ${stock} unidades`}
                </Card.Text>

                <Button className="mt-auto" variant="primary" disabled={agotado} onClick={()=>onAgregar(producto)} >Agregar al carrito</Button>
            </Card.Body>

        </Card>

    )

}

export default TarjetaProducto