import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'//1

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //2
  test:{
    environment:'jsdom',//declaramos que usaremos una navegador simulado para probar componentes
    globals:true,//me permite usar comandos de jasmine sin problemas
    setupFiles:'src/configuracion.js'
  }
})
