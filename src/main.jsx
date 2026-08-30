import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/globals.css'

/*
 * `basename` is taken from the Vite base path set in vite.config.js, so the
 * router works identically at localhost:5173/portfolio/ and at
 * https://<user>.github.io/portfolio/ — no code changes between the two.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
