//Librerias
import React from 'react'
import { createRoot } from 'react-dom/client'
//Componentes
import App from './components/App'
//Estilos
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
