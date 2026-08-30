import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* ---------------------------------------------------------------------------
 * ⚙️  GITHUB PAGES BASE PATH  — EDIT THIS ONE LINE BEFORE YOU DEPLOY
 * ---------------------------------------------------------------------------
 * If your repo is  https://github.com/<user>/<repo>  and the site will live at
 *   https://<user>.github.io/<repo>/      →  set BASE = '/<repo>/'
 *
 * If you use a *user* site repo named  <user>.github.io  (site at the root)
 *   https://<user>.github.io/            →  set BASE = '/'
 *
 * If you use a custom domain (CNAME)     →  set BASE = '/'
 * ------------------------------------------------------------------------- */
export const BASE = '/morvaridemsaki/'

export default defineConfig({
  plugins: [react()],
  base: BASE,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Small, cache-friendly chunks
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
