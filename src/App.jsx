import { Container } from 'react-bootstrap'
import Encabezado from './components/Encabezado.jsx'
import Portada from './components/Portada.jsx'
import PieDePagina from './components/PiePagina.jsx'
import Catalogo from './components/Catalogo.jsx'
import {productos, formatearPrecio}  from './data/productos.js'
import { useState } from 'react'
import Carrito from './components/Carrito.jsx'

function App() {

  const [carrito,setCarrito]= useState([])
  const [mostrarCarrito,setMostrarCarrito]=useState(false)

  const cantidadTotal= carrito.reduce( (sumatoria,item) => sumatoria+item.cantidad ,0  )

  function agregarAlCarrito(producto){

    setCarrito(carritoActual => {
      const existe= carritoActual.find( item => item.id===producto.id )
      if(existe){
        return carritoActual.map( item => 
          (item.id===producto.id)? {...item,cantidad:item.cantidad+1} : item  )
      }

      //[{nombre:"zapatilla",cantidad:20},{nombre:"Poleron",cantidad:12}]
      return [...carritoActual,{...producto,cantidad:1}]


    } )

  }

  function quitarDelCarrito(id){
    setCarrito( (carritoActual) => carritoActual.filter(item => item.id !==id) )
  }



  //vamos a usar lo que acabamos de programar





  return (
    <>
      {/* ESTO ES UN COMENTARIO */}
      <Encabezado cantidad={cantidadTotal} onVerCarrito={()=>setMostrarCarrito(true)} />
      <Portada />

      <Container as="main" id="catalogo">
        <h2 className="mb-3">Catálogo</h2>
        <p className="text-muted">Aquí irá el catálogo de productos (clase 3).</p>
        <Catalogo productos={productos} agregarAlCarrito={agregarAlCarrito}/>
        

      </Container>


      <Carrito mostrar={mostrarCarrito} items={carrito} onQuitar={quitarDelCarrito} onVaciar={()=>setCarrito([])} onCerrar={()=> setMostrarCarrito(false)}  />
      <PieDePagina />

    </>

  )


}

export default App