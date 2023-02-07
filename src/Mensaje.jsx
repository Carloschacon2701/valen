import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Mensaje = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div  className='papa' data-aos="zoom-in" data-aos-duration="3000">
        <div className='pepegan'>
            <h1 className='mensaje'>Feliz cumple Papa, Te amamos Mucho</h1>
            <div className='icons-1'>
            <i class="fa-solid fa-cake-candles icon fa-6x"></i>
            <i class="fa-solid fa-cake-candles icon fa-6x"></i>
            <i class="fa-solid fa-cake-candles icon fa-6x"></i>
            </div>
            
        </div>
    </div>
  )
}
