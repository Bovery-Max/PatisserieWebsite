import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  
base: '/PatisserieWebsite/',
  server: {
    port: 5173,
    strictPort: true  // port doluysa hata ver, başka porta geçme
  }
})


