import { render,screen } from "@testing-library/react";
import { formatearPrecio } from "../data/productos";
import  TarjetaProducto from './TarjetaProducto'
import { describe, expect, it } from "vitest";


describe('Pruebas al componente TarjetaProducto',()=>{
    const AUDIFONOS = {id:1,nombre:'Audífonos',precio:29990,stock:12}
    const MOUSE= {id:3,nombre:'Mouse Razer',precio:45900,stock:0}

    it('muestra el nombre del producto',()=>{
    
        render(<TarjetaProducto producto={AUDIFONOS} onAgregar={vi.fn()} />)

        expect(screen.getByText('Audífonos') ).toBeInTheDocument()

    })
    it('muestra el precio en formato CLP',()=>{
        render(<TarjetaProducto producto={MOUSE} onAgregar={vi.fn()} />)
        const precioFormateado=formatearPrecio(MOUSE.precio)
        expect(screen.getByText(precioFormateado)).toBeInTheDocument()
    })

    it('deshabilita el botón cuando no hay stock',()=>{
        render(<TarjetaProducto producto={MOUSE} onAgregar={vi.fn()} />)
        expect(screen.getByRole('button')).toBeDisabled();
    })
})

