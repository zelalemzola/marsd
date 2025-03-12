import { Facebook, Instagram, Leaf, Linkedin, Mail, MapIcon, MapPin, PhoneCall, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full h-auto pt-6 flex items-center justify-between flex-col md:flex-row font-bold  border-t border-primary rounded-t-2xl  px-5 md:px-20 py-5 gap-5 md:gap-0'>
        <div className="flex flex-col gap-4 items-start">
            <div className='flex items-end gap-3 flex-wrap'>
               
                <p className='text-2xl font-bold text-primary flex items-center gap-1'>Mars <span className='text-secondary'>Design</span></p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-4 flex-wrap">
                <Link href='/about' className='text-sm md:text-md text-primary font-light'>About</Link>
                <Link href='/services' className='text-sm md:text-md text-primary font-light'>services</Link>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link href='/chat' className='text-sm md:text-md text-primary font-light'>Contact</Link>
                <Link href='/' className='text-sm md:text-md text-primary font-light'>Terms and conditions</Link>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-7 md:gap-10">
              <Instagram className='text-lg text-primary  p-1  font-bold scale-[140%]' />
              <Facebook className='text-lg text-primary  p-1   font-bold scale-[140%]' />
              <Twitter className='text-lg text-primary p-1   font-bold scale-[140%]' />
              <Linkedin className='text-lg text-primary p-1  font-bold scale-[140%]' />

        </div>
        </div>
       
    
        <div className="flex items-center  w-full md:w-auto
         mx-auto flex-col md:flex-row gap-5 text-primary text-md">
              <div className="flex flex-col items-center gap-3">
                <PhoneCall/>
                <p className="">+251 91 326 4140 / +251911653782</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Mail/>
                <p className="">marsdesign2016@gmail.com</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <MapPin/>
                <p className="">Sheger city Gelan subcity administration</p>
              </div>
              

        </div>
     
    </div>
  )
}

export default Footer