import {React,useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from  'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'

function Navbar() {
    const [mobileView, SetmobileView] = useState(false)
    const handleClick=()=>{
        SetmobileView(!mobileView)
    }
  return (
    <div className='flex max-w-[1640px] mx-auto p-4 justify-between items-center '>
        <div className='flex items-center'>
            {/* left side */}
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30} onClick={handleClick}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className=' font-bold'>Eats</span>
            </h1>
            <div className='md:flex hidden items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black  text-white rounded-full p-2 cursor-pointer'>Delivery</p>
                <p className='p-2 cursor-pointer'>Pick up</p>
            </div>
        </div>
        <div className="flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch size={25}/>
            <input type="text" className='bg-transparent focus:outline-none p-2 w-full' placeholder="Search foods" />
        </div>
        <div className='ml-5'>
            {/* cartbutton */}
            <button className='flex bg-black text-white px-4 items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2'/> 
                Cart
            </button>
        </div>
            {/* mobile view */}
        <div onClick={handleClick} className= {mobileView?'bg-black/80 fixed w-full h-screen z-10 left-0 bottom-0 ':''}>
            {/* overlay */}
            <div className={mobileView?'bg-white w-[350px] h-screen duration-300 z-10 fixed top-0 left-0':'bg-white w-[350px] h-screen duration-300 z-10 fixed top-0 left-[-100%]'}>
                <AiOutlineClose size={30} onClick={handleClick} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <TbTruckDelivery size={25} className="mr-4"/> Orders
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <MdFavorite size={25} className="mr-4"/> Favorites
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <FaWallet size={25} className="mr-4"/> Wallet
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <MdHelp size={25} className="mr-4"/> Help
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <AiFillTag size={25} className="mr-4"/> Promotions
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <BsFillSaveFill size={25} className="mr-4"/> Best Ones
                        </li>
                        <li className='flex text-xl py-4 hover:px-4 cursor-pointer hover:bg-gray-800 hover:text-white'>
                            <FaUserFriends size={25} className="mr-4"/> Invite friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar