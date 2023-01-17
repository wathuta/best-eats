import React from 'react'

function Hero() {
  return (
    <div className='m-width-[1640px] mx-auto px-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg:text-7xl'>The <span className='text-orange-500 font-bold'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:6xl lg:text-7xl'><span className='text-orange-500 font-bold'>Foods </span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        </div>
    </div>
  )
}

export default Hero