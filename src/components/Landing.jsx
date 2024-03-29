import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6"; 

const Landing = () => {
  return (
    <div data-scroll data-scroll-speed="-0.4" className='w-full h-full pt-1 bg-zinc-900'>
    <div className='mt-40 px-20 font-anton text-gray-100'>
         {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
            return (
                <div className='heading'>
                    <div className='w-full flex items-end'>
                    {index===1 && (
                        <motion.div 
                        initial = {{width : 0}}
                        animate = {{width : "8.5vw"}}
                        transition={{ease : [0.37, 0, 0.63, 1],duration : 2}}
                        className='bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center w-[9vw] h-[5vw] mr-5 relative top-[1vw]'></motion.div>
                    )}
                    <h1 key={index} className='-mb-[1vw] pt-[2vw] leading-[0.8] text-[6vw]  '>{item}</h1>
                    </div>
                </div>              
            )
         })}
         </div>
         <div className='border-t-[1px] bg-zinc-700 mt-32'>
         <div className='bg-zinc-900 flex justify-between px-8 py-4'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
                return(
                    <p key={index} className='text-lg text-white leading-none capitalize tracking-tight'>{item}</p>
                )
            })}
            <div className='flex justify-between gap-4'>
            <div className='px-8 py-3 rounded-full bg-gradient-to-r from-cyan-700 to bg-cyan-800 leading-none tracking-wide font-semibold uppercase text-white cursor-pointer'>Start the Project</div>
            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-cyan-600 to bg-cyan-800 rotate-45 flex items-center justify-center cursor-pointer'><FaArrowUpLong className='w-7 h-6 text-gray-200' /></div>
         </div>
         </div>
         </div>
           
         </div>
  )
        }
 

export default Landing