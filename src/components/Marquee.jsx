import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div>
      <div data-scroll data-scroll-speed ="-0.1" className='w-full py-24 pb-36 bg-[#004d21] mt-14 rounded-tl-3xl rounded-tr-3xl text-white'>
          <div className='flex border-t-2 border-b-2 border-zinc-300 whitespace-nowrap overflow-hidden'>
          <motion.h1 
            initial = {{x : "0"}}
            animate = {{x : "-100%"}}
            transition={{ease : 'linear' , duration : 10 , repeat : Infinity}}
           className='text-[18vw] font-semibold leading-none tracking-tighter pb-6 -pt-6'> WE ARE OCHI</motion.h1>
            <motion.h1 
              initial = {{x : "0"}}
              animate = {{x : "-100%"}}
              transition={{ease : 'linear' , duration : 10 , repeat : Infinity}}
             className='text-[18vw] font-semibold leading-none tracking-tighter pb-6 -pt-6'> WE ARE OCHI</motion.h1> 
          </div>
         </div>
    </div>
  )
}

export default Marquee