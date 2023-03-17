import React, { useState } from 'react';
import quarn from "../../assets/images/Quran.png"

function Quran() {
   
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>القران الكريم</h1>
      <img className='w-20 h-fit' src={quarn} alt="quarn" />
    </div>
  )
}

export default Quran