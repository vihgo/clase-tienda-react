import { Container } from 'react-bootstrap'

function PieDePagina(){

    return(
        <footer id='contacto' className='bg-dark text-white-50 py-4 mt-5'>
            <Container className='text-center '>
                <p className='mb-1 '>Lo quieres, te lo vendo</p>
                <ul className='list-unstyled'>
                    <li>
                        contacto@loquierestelovendo.cl
                    </li>
                    <li>
                        <strong>Instagram </strong> @loquierestelovendo
                    </li>
                    
                </ul>
                <small>© 2026 Equipo DSY1104 Desarrollo Full Stack 2 </small>

            </Container>

        </footer>

    )



}


export default PieDePagina