import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import {  ArrowRightIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh] gap-5 relative z-20'>
      <h1 className='text-2xl md:text-9xl text-primary font-bold'>Mars Design</h1>
      <p className='text-lg md:text-2xl'>"Timeless Elegance, Ethiopian Heritage, Unparalleled Craftsmanship."</p>
      <div className="absolute -z-20 top-40 w-full hidden md:flex items-center justify-between">
        <Image src='/hero1.png' alt='hero1' width={420} height={220}/>
        <Image src='/hero2.png' alt='hero1' width={420} height={220} className=' -mt-[20%]'/>
      </div>
      <div className='flex flex-wrap items-center gap-6'>
        <Link className='py-2 px-4 rounded-full border-1 border-primary flex items-center gap-3' href='/'>Explore Collections <ArrowRightIcon/></Link>
        <Link className='py-2 px-4 rounded-full bg-primary flex items-center gap-3 text-white' href='/'>Custom Order Now!<ArrowRightIcon/></Link>
      </div>
        </div>
  )
}

export default Hero