import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths help when this is hosted under a subpath (common in funnel builders).
  base: './',
  plugins: [react()],
})
