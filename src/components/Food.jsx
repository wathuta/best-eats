import React, { useState } from 'react'
import {data} from '../Data/data.js'

function Food() {
    const [foods,setfoods] = useState(data);
    //filter type
    const filterType = (category)=>{
        setfoods(data.filter((item)=>{
            return item.category ===category
        }))
    }
    const filterPrice = (price) =>{
        setfoods(data.filter(item=>{
            return item.price ===price
        }))
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-2'>
        <h1 className='font-bold text-4xl text-center text-orange-600'>Top rated menu items</h1>
        {/* filter row */}
        <div className='py-4 flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div className='py-4'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap '>
                <button onClick={()=>{
                    setfoods(data)
                }} className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>All</button>
                <button
                onClick={()=>{filterType('burger')}}
                className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>Burgers</button>
                <button 
                onClick={()=>{filterType('pizza')}}
                className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button
                onClick={()=>{filterType('salad')}}
                className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>Salads</button>
                <button 
                onClick={()=>{filterType('chicken')}}
                className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between flex-wrap max-w-[390px]'>
                    <button
                    onClick={()=>{filterPrice('$')}}
                    className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>$</button>
                    <button
                    onClick={()=>{filterPrice('$$')}}
                    className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button 
                    onClick={()=>{filterPrice('$$$')}}
                    className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button 
                    onClick={()=>{filterPrice('$$$$')}}
                    className='border-orange-600 text-orange-600 mx-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {foods.map((item,index)=>(
                <div key={index} className="border shadow-lg hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg"/>
                    <div className='flex justify-between py-4 px-2'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span  className='bg-orange-600 rounded-full p-2 text-white hover:border hover:bg-white hover:text-orange-600 hover:border-orange-600 cursor-pointer'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food