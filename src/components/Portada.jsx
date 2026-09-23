import { Container } from 'react-bootstrap'

function Portada(){
    const anio=2026

    return(
        <section id='inicio' className='portada py-5 mb-4'>
            <Container>
                <h1 className='display-5 fw-bold'>Lo quieres, te lo vendo</h1>
                <p className='lead mb-0'>
                    Tu tienda online de confianza. Temporada {anio}
                </p>
            </Container>
        </section>
    )

}

export default Portada