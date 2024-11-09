import ula from '../logo/ula.png';
import React from 'react'
export default function Titulo() {
  return (
    <div className="titulo">
      <a href="https://www.ulagos.cl/acerca-ulagos/la-universidad/" target="_blank" rel="noopener noreferrer">
        <img className='ula_logo' src={ula} alt="ULA Logo" />
      </a>
      <div className='titul_text' >Malla Curricular 2020 Ingeniería Civil en Informática</div>
      
      
    </div>
  )
}