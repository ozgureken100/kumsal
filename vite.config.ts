import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages proje sitesi alt yoldan yayınlanır (ozgureken100.github.io/kumsal/),
// Netlify ise kök yoldan; bu yüzden base yalnızca `--mode ghpages` ile ayarlanır.
export default defineConfig(({ mode }) => ({
  base: mode === 'ghpages' ? '/kumsal/' : '/',
  plugins: [react()],
}))
