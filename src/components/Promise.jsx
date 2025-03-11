import Link from 'next/link';
import React from 'react'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import { BlurFade } from './magicui/blur-fade';

const Promise = () => {
  return (
    <div>
    <div className='mx-5 md:mx-20 flex flex-col gap-5 items-start h-fit md:h-screen py-10'>
    <div className=' '>
      
    <div className='border-l-8 border-l-secondary flex items-start flex-col gap-4 px-4 '>
        <BlurFade  delay={0.35} inView>
     <h1 className='text-3xl md:text-4xl font-bold text-[#141414] dark:text-white'>Our Promise to You</h1>
     </BlurFade>
       <BlurFade  delay={0.45} inView>
     <p className='text-gray-400 dark:text-gray-100 text-md w-full md:w-2/3'>
     <b className='text-lg'>we understand that luxury is more than just fashion—</b> it’s an experience. When you choose us, you are choosing exclusivity, precision, and personalized service designed to meet the highest standards.
     </p>
     </BlurFade>
     </div>
     {/* <Link href='/' className='rounded-full py-2 px-2 flex items-center gap-3 bg-primary text-white hover:shadow-2xl w-fit text-nowrap text-lg '>Read More <ArrowRightCircle/></Link> */}
     </div>
     <div className="flex flex-col md:flex-row gap-6 items-center my-6">
        <BlurFade  delay={0.55} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/prem.jpg' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Unmatched Craftsmanship </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'> Every piece is meticulously handcrafted using the finest Ethiopian cotton, ensuring superior quality and lasting elegance.</p>
      </div>
      </BlurFade>
          <BlurFade  delay={0.65} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/privacy.png' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Privacy & Discretion</h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>Your exclusivity is our priority. Whether it’s a custom design or a private fitting, we guarantee absolute confidentiality
</p>
      </div>
      </BlurFade>
       
         <BlurFade  delay={0.75} inView>
      <div className="flex flex-col items-center gap-4 hover:shadow-xl w-full  border shadow-lg rounded-2xl px-4 py-5">
        <Image src='/premium.jpg' alt='Quality' width={100} height={100}/>
        <h2 className='text-2xl text-nowrap'>Priority Service & Swift Delivery </h2>
        <p className='text-gray-400 dark:text-gray-200 w-full text-center'>We value your time. Expect VIP treatment, seamless consultations, and prompt delivery, ensuring your luxury attire arrives when you need it.</p>
      </div>
      </BlurFade>
      
     </div>
    </div>
    </div>
  );
}

export default Promise