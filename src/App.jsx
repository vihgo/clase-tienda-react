import { Container } from 'react-bootstrap'
import Encabezado from './components/Encabezado.jsx'
import Portada from './components/Portada.jsx'
import PieDePagina from './components/PiePagina.jsx'
import Catalogo from './components/Catalogo.jsx'
import {productos, formatearPrecio}  from './data/productos.js'

function App() {

  const tienda = 'Loquieres, te lo vendo'
  const equipo = 'Equipo 1'
  const anio = 2026

  return (
    <>
      {/* ESTO ES UN COMENTARIO */}
      <Encabezado />
      <Portada />

      <Container as="main" id="catalogo">
        <h2 className="mb-3">Catálogo</h2>
        <p className="text-muted">Aquí irá el catálogo de productos (clase 3).</p>
        <Catalogo productos={productos}/>
        

      </Container>


      <PieDePagina />

    </>

  )


}

export default App