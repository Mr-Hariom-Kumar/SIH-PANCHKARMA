import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { images } from '../assets/assets'

const Header = () => {

    const [currentImage,setCurrentImage]=useState(0)
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentImage((prev)=>(prev+1)%images.length)
        },3000)
        return ()=> clearInterval(interval)
    },[]);
  return (
    <div className='relative  mt-10 flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* images */}
        <div className='absolute inset-0 border border-primary rounded-lg'>
            {
                images.map((item,index)=>(
                    <img src={item} key={index} className={`absolute border rounded-lg w-full h-full object-cover z-0 transition-opacity duration-1000 ${index===currentImage?'opacity-100':'opacity-0'}`} alt="" />
                ))
            }
            <div className="absolute inset-0 bg-white/30 "></div>
        </div>
         {/* left */}
        <div className='md:w-1/2 flex flex-col z-10 item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
            <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br /> With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3  text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p className='!text-white'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block text-white'/> Schedule your appointment hustle-free</p>
            </div>
            <a  className='flex items-center gap-2 bg-white font-medium px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">
                Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>

        {/* right */}
        <div className='md:w-1/2 relative '>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>

    </div>
  )
}

export default Header
