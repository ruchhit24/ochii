import React from 'react'

const Featured = () => {
  return (
    <div className='relative'>
         <div className='w-full h-screen bg-white pt-32 rounded-tr-3xl rounded-tl-3xl -mt-4 absolute z-[999] '>
      <div className='px-10 border-b-2 border-gray-300 pb-8'>
        <h1 className='text-6xl font-anton leading-2   '> Featured Projects</h1>
      </div>
      <div className='w-full py-11 flex'>
        <div className='cardcontainer w-1/2 h-[80vh] mx-10'>
            <div className='card w-[40vw] h-[70vh] mx-auto my-7 rounded-xl bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] bg-cover bg-center hover:scale-95 duration-500 ml-16 '></div>
        </div>
        <div className='cardcontainer w-1/2 h-[80vh] mx-10 pr-32'>
        <div className='card w-[40vw] h-[70vh] bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")] bg-cover bg-center mx-auto my-7 rounded-xl hover:scale-95 duration-500 '></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Featured