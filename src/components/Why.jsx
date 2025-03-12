import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlurFade } from './magicui/blur-fade'


const Why = () => {
  return (
    <div className='mx-5 md:mx-20 flex flex-col gap-5 items-start h-fit md:h-screen py-10'>
    <div className='flex flex-col w-full md:flex-row items-start justify-between'>
    
    <div className='flex flex-col gap- border-l-8 border-l-secondary  items-start pb-5 px-4 '>
     <BlurFade  delay={0.35} inView>
     <h1 className='text-3xl md:text-4xl font-bold text-[#141414] dark:text-white w-full'>Why Mars Design?</h1>
     <p className='text-lg pt-5'><b>Ethiopian Heritage Meets Modern Elegance –</b> Traditional motifs and contemporary luxury blended seamlessly.</p>
     </BlurFade>
     <BlurFade  delay={0.45} inView>
     <p className='text-gray-400 dark:text-gray-100 text-md w-full md:w-2/3'>
     </p>
     </BlurFade>
     </div>
     <BlurFade  delay={0.45} inView>
     <Link href='/' className='rounded-full py-2 px-2 flex items-center gap-3 bg-primary text-white hover:shadow-2xl w-fit text-nowrap text-lg'>Read More <ArrowRightCircle/></Link>
     </BlurFade>
     </div>
     <div className="flex flex-col md:flex-row gap-6 items-center my-6">
      <BlurFade  delay={0.35} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/prem.jpg' alt='Quality' width={290} height={290}/>
        <h2 className='text-2xl text-nowrap'>Premium Handwoven Cotton </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Sustainably sourced, finest quality, breathable, and soft.</p>
      </div>
      </BlurFade>
       <BlurFade  delay={0.45} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/h2.png' alt='Quality' width={120} height={120}/>
        <h2 className='text-2xl text-nowrap'>Custom Luxury Attire </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Designed exclusively per client’s specifications.</p>
      </div>
      </BlurFade>
      <BlurFade  delay={0.55} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/h1.png' alt='Quality' width={200} height={200}/>
        <h2 className='text-2xl text-nowrap'>Elite Clientele & Exclusivity</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Worn by high-profile figures, available only to select clients.</p>
      </div>
      </BlurFade>
      
     </div>
    </div>
  )
}

export default Why