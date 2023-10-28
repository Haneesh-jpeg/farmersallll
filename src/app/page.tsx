"use client"
import { NavBar } from '@/components';
import Link from 'next/link';
import Lottie from "lottie-react";
import opm from '../../public/hpNMreBNXE.json';

export default function Home() {

  const options = {
    animationData: opm,
    loop: true
  };



  return (
    <main className='p-10'>
     <NavBar />

     <div className='grid grid-cols-2 justify-evenly py-[10rem]'>
        <div className='px-10'>
          <div className='font-extrabold text-3xl mb-10'>
            <h1 className=''>Without <span className='text-green'>Farmers</span>, </h1> 
            <h1 className='pt-[1rem]'>no <span className='text-green'>Country</span> can progress.</h1>
          </div>
        
          <Link className='bg-green p-5 pt-[1rem] text-white rounded-xl' href={'/'}>Explore</Link>
        </div>
        <div className='px-10 flex '>
          <p className='p-10 text-white bg-green rounded-[4rem] w-9/12'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
          </p>
        </div>
     </div>
       <Lottie animationData={opm} loop={true} className='absolute bottom-0'/>
    </main>
  )
}
