import './App.css'
import Encabezado from './components/Encabezado.jsx'

function App(){

  const titulo= 'Lo quieres te lo vendo. Tú tienda de confianza'
  const equipo='DSY1104-004v'
  const anio=2026

  return (
    <>
    <Encabezado/>
    <main className='contenedor'>
      <h1>🏪 {titulo} </h1>
      <p>
        Mi primer proyecto con <strong>React + vite </strong>
      </p>
       
      <p className="pie"> {equipo} * {anio} </p>
    </main>

    </>
  )

}

export default App