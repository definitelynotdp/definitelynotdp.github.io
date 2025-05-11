import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3d-portfolio/', // 👈 this is critical for GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
