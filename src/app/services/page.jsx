
import HeroCTA from '@/components/HeroCTA'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Leaf } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='px-5 md:px-20 py-5'>
        <div className='h-auto flex  flex-col md:flex-row'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-5xl  font-bold'>Our Services</h1>
                </BlurFade>
                 <BlurFade  delay={0.55} inView>
                <p className='text-gray-400 dark:text-gray-300 text-md md:text-lg w-full '>Exclusive Offerings for the Elite</p>
                </BlurFade>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-5 md:gap-0'>
                  <div className='flex flex-col gap-3 w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                    <h1 className='text-2xl md:text-3xl'>Introduction</h1>
                    </BlurFade>
                     <BlurFade  delay={0.75} inView>
                    <p className='text-gray-400  dark:text-gray-200 md:text-lg'>At Mars Design, we offer more than just clothing—we offer a luxury experience tailored to your style, comfort, and prestige. Our services are designed for those who seek exclusivity, craftsmanship, and modern elegance infused with Ethiopian tradition.</p>
                  </BlurFade>
                  </div>
                  <div className='flex flex-row  items-end justify-center w-full md:w-1/2'>
                   <BlurFade  delay={0.65} inView>
                   <Image src='/h1.png' alt='about' width={320} height={320} className=''/>
                   </BlurFade>
                     
                  </div>
                </div>
            </div>
        </div>


        <div className='h-auto flex  flex-col py-20'>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'> Bespoke Custom-Made Attire </h1>
                <p className="text:lg md:text-xl">Designed for You, Made to Perfection</p>
                </BlurFade>
               
                </div>
               <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full '>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>For those who desire a truly unique masterpiece, our bespoke service offers:</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <div className='flex items-center flex-wrap gap-5 py-20'>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary text-lg md:text-xl w-fit">1</p>
                                    <h2 className=" font-bold text-lg md:text-xl"> Personalized Design Consultation </h2>
                                    <p className="text-lg text-center "> Work directly with our expert designers to bring your vision to life.</p>
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary text-lg md:text-xl w-fit">2</p>
                                    <h2 className=" font-bold text-lg md:text-xl text-center"> Premium Ethiopian Cotton Selection .</h2>
                                    <p className="text-lg text-center ">Choose from the finest, handwoven cotton fabrics.</p>
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary text-lg md:text-xl w-fit">3</p>
                                    <h2 className=" font-bold text-lg md:text-xl">Fabric & Material Selection Exclusive Embroidery & Detailing </h2>
                                    <p className="text-lg text-center ">Intricate gold and silver-thread embroidery inspired by Ethiopian heritage.</p>
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary text-lg md:text-xl w-fit">4</p>
                                    <h2 className=" font-bold text-lg md:text-xl">Perfect Fit Guarantee.</h2>
                                    <p className="text-lg text-center ">Tailored to your exact measurements for a flawless look and feel.</p>
                                  </div>
                                  </BlurFade>
                                  
                                   
                                 
                                  </div>  
                     </BlurFade>
                  </div>
                  
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Signature Designer Collections</h1>
                <p className="text:lg md:text-xl">Luxury Meets Tradition</p>
                </BlurFade>
               
                </div>
               <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full '>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>Explore our exclusive Mars Design Collection, where modern sophistication meets Ethiopian tradition.</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <div className='flex items-center flex-wrap gap-5 py-20'>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">1</p>
                                    <h2 className=" font-bold "> Limited-edition pieces crafted with luxury-grade cotton and contemporary cuts. </h2>
                                   
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">2</p>
                                    <h2 className=" font-bold  text-center">  Inspired by heritage designs but redefined for today’s fashion-forward elite.</h2>
                                  
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">3</p>
                                    <h2 className=" font-bold "> Perfect for special occasions, formal events, and those who demand standout elegance.</h2>
                                    
                                  </div>
                                  </BlurFade>
                                     
                                  
                                   
                                 
                                  </div>  
                     </BlurFade>
                  </div>
                  
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'>Private Fittings & Personalized Styling</h1>
                <p className="text:lg md:text-xl">Experience True Luxury</p>
                </BlurFade>
               
                </div>
               <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full '>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>We provide an exclusive, one-on-one fitting experience, ensuring every piece drapes you in comfort and sophistication.</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <div className='flex items-center flex-wrap gap-5 py-20'>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">1</p>
                                    <h2 className=" font-bold "> Personalized styling guidance to match your lifestyle and occasion. </h2>
                                   
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">2</p>
                                    <h2 className=" font-bold  text-center">  Discreet, fast, and premium service for high-profile clients.</h2>
                                  
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">3</p>
                                    <h2 className=" font-bold ">Private, VIP fitting sessions in our boutique or at your preferred location.</h2>
                                    
                                  </div>
                                  </BlurFade>
                                     
                                  
                                   
                                 
                                  </div>  
                     </BlurFade>
                  </div>
                  
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'> Custom Wedding & Special Occasion Wear</h1>
                <p className="text:lg md:text-xl">Timeless Elegance for Life’s Most Important Moments</p>
                </BlurFade>
               
                </div>
               <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full '>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>For weddings, cultural celebrations, and exclusive events, Mars Design crafts one-of-a-kind garments that embody sophistication and heritage.</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <div className='flex items-center flex-wrap gap-5 py-20'>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">1</p>
                                    <h2 className=" font-bold "> Exquisite bridal and groom wear with royal Ethiopian influence.</h2>
                                   
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">2</p>
                                    <h2 className=" font-bold  text-center"> Custom family ensembles, reflecting cultural elegance.</h2>
                                  
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">3</p>
                                    <h2 className=" font-bold "> Fast-track premium service for urgent requests.</h2>
                                    
                                  </div>
                                  </BlurFade>
                                     
                                  
                                   
                                 
                                  </div>  
                     </BlurFade>
                  </div>
                  
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='border-l-8 border-l-secondary pb-4 px-3'>
                   <BlurFade  delay={0.45} inView>
                <h1 className=' text-3xl md:text-4xl  font-bold'> Premium Alterations & Refinements</h1>
                <p className="text:lg md:text-xl">Perfecting Every Detail</p>
                </BlurFade>
               
                </div>
               <div className='flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-0'>
                  <div className='flex flex-col justify-center gap-3 w-full '>
                   <BlurFade  delay={0.55} inView>
                    <h1 className='text-2xl md:text-3xl'>For those who own high-end Ethiopian traditional wear that requires expert adjustments, we offer:</h1>
                    </BlurFade>
                     <BlurFade  delay={0.65} inView>
                    <div className='flex items-center flex-wrap gap-5 py-20'>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">1</p>
                                    <h2 className=" font-bold "> Luxury-grade alterations to refine and enhance your garments.</h2>
                                   
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">2</p>
                                    <h2 className=" font-bold  text-center">Fabric restoration & detailing to preserve intricate embroidery.</h2>
                                  
                                  </div>
                                  </BlurFade>
                                     <BlurFade  delay={0.55} inView>
                                  <div className="flex flex-col items-center gap-3">
                                    <p className="px-4 py-1 rounded-full bg-primary  w-fit">3</p>
                                    <h2 className=" font-bold ">A second life for beloved heritage pieces, tailored to modern aesthetics.</h2>
                                    
                                  </div>
                                  </BlurFade>
                                     
                                  
                                   
                                 
                                  </div>  
                     </BlurFade>
                  </div>
                  
                </div>
            </div>
            <BlurFade  delay={0.55} inView>
              <HeroCTA/>
              </BlurFade>
        </div>
       
        </div>
  )
}

export default Services