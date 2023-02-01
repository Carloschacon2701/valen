import React from 'react'
import {Link} from 'react-router-dom'


export const Principal = () => {
  return (
    <div>
        <div className="App">
      <div className= 'pantalla'>
        <h1 className='nombre'>Hola Gaby</h1>
        <div className='boton'>
          <i class="fa-solid fa-arrow-right arrow"></i>
          <Link to="/mensaje"  className='boton-rojo'>Press Here</Link>
          <i class="fa-solid fa-arrow-left arrow"></i>
        </div>

      </div>
    </div>
    </div>
  )
}
