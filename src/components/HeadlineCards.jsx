import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* HeadlineCards */}
        <div className='relative rounded-xl'>
          <div className='absolute bg-black/50 rounded-xl w-full h-full text-white'>
            <p className='font-bold text-3xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-4'>Through 8/26</p>
            <button className='bg-white text-black border-white mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="burger" 
          className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover'/>
        </div>
        <div className='relative rounded-xl'>
          <div className='absolute bg-black/50 rounded-xl w-full h-full text-white'>
            <p className='font-bold text-3xl px-2 pt-4'>We Deliver Desserts</p>
            <p className='px-4'>Too</p>
            <button className='bg-white text-black border-white mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="burger" 
          className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover'/>
        </div>
        <div className='relative rounded-xl'>
          <div className='absolute bg-black/50 rounded-xl w-full h-full text-white'>
            <p className='font-bold text-3xl px-2 pt-4'>New Restaurants</p>
            <p className='px-4'>Added daily</p>
            <button className='bg-white text-black border-white mx-2 absolute bottom-4'>Order Now</button>
          </div>
          <img 
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="burger" 
          className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover'/>
        </div>
    </div>
  )
}

export default HeadlineCards