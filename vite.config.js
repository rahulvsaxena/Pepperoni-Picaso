import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //only for dockerization
  server:{
    host: true,
    strictPort: true,
    port: 8080
  }
})
