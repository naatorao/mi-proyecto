import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Saludo from './Saludo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Saludo />
  </StrictMode>,
)
