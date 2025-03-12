
import HeroCTA from '@/components/HeroCTA';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Crosshair, Telescope, Leaf, Pen, Diamond, DiamondIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const avatars = [
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/an",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/"  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
  {
    imageUrl: "/avatar.png",
    profileUrl: "/",
  },
];
const AboutPage = () => {
  return (
    <div className='px-5 md:px-20 py-5'>
        <div className='h-auto flex  flex-col md:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                  <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>About Mars Design</h1>
                </BlurFade>
                 <BlurFade  delay={0.55} inView>
                <p className='text-gray-400 dark:text-gray-300 text-md md:text-lg w-full '>Cotton Wooven into Legacy</p>
               </BlurFade>
                </div>
                <div className='flex flex-col items-center justify-between md:flex-row gap-5 md:gap-0'>
                  <div className='flex flex-col gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                    <h1 className='text-2xl md:text-3xl'>Introduction</h1>
                    </BlurFade>
                     <BlurFade  delay={0.75} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg'>At Mars Design, we don’t just craft clothing—we weave heritage into every stitch. Inspired by Ethiopia’s rich tradition of handwoven cotton garments, we blend timeless craftsmanship with modern luxury to create bespoke and designer pieces for those who demand elegance.

Every fabric is carefully selected, every thread woven with precision, and every design infused with a touch of innovation. Whether it's a custom-made masterpiece or a signature Mars Design creation, our pieces honor Ethiopia’s traditional styles while redefining them for the modern elite.

From consultation to final fitting, we ensure a seamless, private, and premium experience—because true luxury is personal.
<br/>
<b className='text-secondary'>Mars Design</b> – Where Tradition Meets Innovation.</p>
                  </BlurFade>
                  </div>
                  <div className='flex justify-center items-center w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/h1.png' alt='about' width={320} height={420} className=''/>
                  </BlurFade>
                  
                  </div>
                </div>
            </div>
        </div>
        <div className='h-auto flex flex-col md:flex-row gap-5 my-20'>
            
            <div className="border shadow-md hover:shadow-xl dark:shadow-white rounded-2xl flex flex-col items-center gap-4 w-full md:w-1/2 px-4 py-4 ">
              <BlurFade  delay={0.45} inView>
                 <Crosshair size={42} className='text-primary'/>
              </BlurFade>
               <BlurFade  delay={0.55} inView>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Mission</h2>
              </BlurFade>
               <BlurFade  delay={0.65} inView>
              <p className='text-lg text-gray-400 dark:text-gray-300 text-center'>To redefine Ethiopian luxury fashion through precision, heritage, and sustainability..</p>
             </BlurFade>
            </div>
           

            
            <div className="border shadow-md hover:shadow-xl dark:shadow-white rounded-2xl flex flex-col items-center gap-4 w-full md:w-1/2 px-4 py-4 ">
               <BlurFade  delay={0.55} inView>
                 <Telescope size={42} className='text-primary'/>
                 </BlurFade>
                  <BlurFade  delay={0.65} inView>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Vision</h2>
              </BlurFade>
                 <BlurFade  delay={0.75} inView>
              <p className='text-lg text-gray-400 dark:text-gray-300 text-center'>To be the global standard of African luxury fashion, crafted with heritage and soul.</p>
               </BlurFade>
            </div>
            
        </div>
        <div className='h-auto py-10 md:py-20'>
          <div className='border-l-8 border-l-secondary pb-4 px-3'>
             <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>Our Values</h1>
                </BlurFade>
              </div>
              <div className='flex items-center flex-wrap gap-5 py-20'>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><DiamondIcon fill='orange' className='text-white' size={25}/>Breakdown of premium Ethiopian cotton, known for its softness and durability.</h2>
              </div>
              </BlurFade>
                 <BlurFade  delay={0.65} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><DiamondIcon fill='orange' className='text-white' size={25}/>Handwoven techniques passed through generations.</h2>
              </div>
              </BlurFade>
               <BlurFade  delay={0.75} inView>
              <div className="flex flex-col gap-3">
                <h2 className="flex items-center gap-2 font-bold text-xl"><DiamondIcon fill='orange' className='text-white' size={25}/>Emphasis on slow fashion, ethical sourcing, and sustainability</h2>
              </div>
              </BlurFade>
             
              </div>
        </div>
        <div className='h-auto py-10 md:py-20'>
          <div className='border-l-8 border-l-secondary pb-4 px-3'>
             <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>Luxury Custom-Made Process</h1>
                </BlurFade>
             <BlurFade  delay={0.45} inView>
                <p className=' text-lg md:text-xl '>Step-by-step walkthrough:
                </p>
                </BlurFade>
              </div>
              <div className='flex items-center flex-wrap gap-5 py-20'>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col items-center gap-3">
                <p className="px-4 py-1 rounded-full bg-primary text-xl md:text-2xl w-fit">1</p>
                <h2 className="flex items-center gap-2 font-bold text-xl md:text-2xl">Exclusive Consultation</h2>
                <p className="text-lg ">Personalized 1-on-1 session.</p>
              </div>
              </BlurFade>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col items-center gap-3">
                <p className="px-4 py-1 rounded-full bg-primary text-xl md:text-2xl w-fit">2</p>
                <h2 className="flex items-center gap-2 font-bold text-xl md:text-2xl">Concept & Sketching</h2>
                <p className="text-lg ">Tailored sketches based on client vision.</p>
              </div>
              </BlurFade>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col items-center gap-3">
                <p className="px-4 py-1 rounded-full bg-primary text-xl md:text-2xl w-fit">3</p>
                <h2 className="flex items-center gap-2 font-bold text-xl md:text-2xl">Fabric & Material Selection</h2>
                <p className="text-lg ">Clients choose premium cotton variations.</p>
              </div>
              </BlurFade>
                 <BlurFade  delay={0.55} inView>
              <div className="flex flex-col items-center gap-3">
                <p className="px-4 py-1 rounded-full bg-primary text-xl md:text-2xl w-fit">4</p>
                <h2 className="flex items-center gap-2 font-bold text-xl md:text-2xl">Precision Tailoring & Handcrafting</h2>
                <p className="text-lg ">In-house artisans craft each detail.</p>
              </div>
              </BlurFade>
              
               
             
              </div>  
               <BlurFade  delay={0.65} inView>
              <HeroCTA/>
              </BlurFade>
        </div>
        
    </div>
  )
}

export default AboutPage