import React from 'react'

const Cards = () => {
  return (
      
        <div className='w-full py-20 bg-white pt-36 border-t-2 border-gray-300'>
             <div className='flex justify-evenly '>
             <div className='cont1 w-3/5 h-[65vh] bg-[#004D43] mx-10 relative  flex justify-center items-center rounded-3xl hover:scale-95 duration-500 cursor-pointer'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='jf' className='absolute '/>
                <button className='px-4  py-2 rounded-full border-gray-400 border-[2px] text-white font-anton leading-none tracking-widest absolute bottom-8 left-10 '>Explore</button>
             </div>
            <div className='cont2 w-4/6 h-[65vh]  mx-10 flex justify-between gap-14'>
                <div className='w-[27vw] h-full bg-[#212121] rounded-3xl flex justify-center items-center hover:scale-95 duration-500 cursor-pointer relative'>
                    <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt='hc' className='absolute'/>
                    <button className='px-4  py-2 rounded-full border-gray-400 border-[2px] text-white font-anton leading-none tracking-widest absolute bottom-8 left-10 '>Rating 5.0 on clutch</button>
                </div>
                <div className='w-[23vw] h-full bg-[#212121] rounded-3xl flex justify-center items-center hover:scale-95 duration-500 cursor-pointer relative'>
                    <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='jf' className='absolute'/>
                    <button className='px-4  py-2 rounded-full border-gray-400 border-[2px] text-white font-anton leading-none tracking-widest absolute bottom-8 left-10 '>business bootstrap alumini</button>
                </div>
            </div>
             </div>
        </div>
  ) 
}

export default Cards