import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
        <h1>Bienvenidos</h1>
        <Link to ="/catalogue">
        <button>Mostrar Mercaderia</button>
        </Link> 
    </div>
  )
}

export default Inicio