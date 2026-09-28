import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap'


function Encabezado({cantidad,onVerCarrito }) {

    

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand href="#inicio">🛍️ Lo quieres, te lo vendo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu-principal" />
                    <Navbar.Collapse id="menu-principal">
                        {/* En Bootstrap 5 es "me-auto" (margin-end), ya no "mr-auto" */}
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                            <Nav.Link href="#contacto">Contacto</Nav.Link>
                        </Nav>
                        <Button onClick={onVerCarrito} variant="outline-light"> <Badge>{cantidad}</Badge> 🛒 Carrito</Button>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    )
}

export default Encabezado