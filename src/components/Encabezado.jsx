import { Navbar, Nav, Container,Button } from "react-bootstrap";

function Encabezado(){

    return(
        <Navbar bg="dark" data-bs-theme="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="#inicio">
                    🏪 Lo quieres, te lo vendo!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal" />
                <Navbar.Collapse id="menu-principal">
                    <Nav className="me-auto" >
                        <Nav.Link href="#incio">Inicio </Nav.Link>
                        <Nav.Link href="#catalogo">Catalogo </Nav.Link>
                        <Nav.Link href="#contacto">Contacto </Nav.Link>

                    </Nav>
                    <Button variant="outline-light">🛒 Carrito</Button>

                </Navbar.Collapse>
            </Container>

        </Navbar>
    )

    

}

export default Encabezado