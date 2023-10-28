import React from 'react';
import Link from "next/link";

const navbar = () => {
  return (
      <div className='grid grid-cols-3'>
        <h1 className='col-start-1 text-2xl text-start font-extrabold'>FarmersAll</h1>
        <div className='col-start-2 flex justify-evenly items-center'>
            <Link href={'/'} className='hover:text-green font-semibold'>Home</Link >
            <Link href={'/maps'} className='hover:text-green font-semibold'>Map</Link >
            <Link href={'/opms'} className='hover:text-green font-semibold'>Opms</Link >
            <Link href={'/contact'} className='hover:text-green font-semibold'>Contact</Link >
        </div>
    </div>
  )
}

export default navbar;