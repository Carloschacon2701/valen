import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Mensaje = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div data-aos="zoom-in" data-aos-duration="3000">
        <div className='pepegan'>
            <h1 className='mensaje'>¿Quieres ser mi Valentin?</h1>
            <h3>Adjunte respuesta abajo </h3>
            <a  href="https://wa.me/584121240464"><i class="fa-brands whats fa-square-whatsapp fa-4x"></i></a>


        </div>
    </div>
  )
}
