/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Background from '../../assets/profil.png'

const Banner = () => {
  return (
    <div 
    className='
      flex justify-start items-end w-full h-full
      bg-cover bg-right bg-no-repeat 
    '
    style={{backgroundImage: `url(${Background.src})`}}
  >
      <div 
        className='
          text-white text-center py-3 bg-black max-w-xs 
          rounded-tr-2xl border-t-2 border-r-2 border-white
          lg:max-w-lg 
        '>
        <p>
          “
          <span className='italic px-2'>
            Sifat khusus seorang juara adalah
            kemampuan untuk menang ketika segalanya
            tidak berjalan baik. Inilah cara dai belajar
            memahami arti menjadi seorang pemenang
           </span>
           ”
        </p>
        <p className='mt-2'>
         - Bellie Jean King -
        </p>
      </div>
  </div>
  )
}

export default Banner