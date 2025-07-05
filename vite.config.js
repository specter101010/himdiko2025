import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ], server: {
    allowedHosts: ['6ca6-103-47-133-121.ngrok-free.app'],
    host: true // penting biar Vite bisa diakses via jaringan/public IP/ngrok
  }
})
