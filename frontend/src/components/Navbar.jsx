import React,{useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

  const [visible,setVisible] = useState(false);

  const {setShowSearch, getCartCount} = useContext (ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-base text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-5 relative'>
        <img onClick={()=>setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt="" />
        
        {/* Dropdown and Login Icon*/}
        <div className='relative group'>
          <Link to ='/login'><img className='w-5 cursor-pointer' src={assets.login} alt="" /></Link>
          <div className='hidden group-hover:block absolute right-0 w-32 bg-white text-gray-500 py-3 px-5 rounded shadow-lg'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>
          <Link to='/cart' className='relative'>
            <img src={assets.cart} className='w-5 min-w-5'alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
           </Link>
           <img onClick={()=>setVisible(true)} src={assets.icon} className='w-6 cursor-pointer sm:hidden' alt="" />
      </div>

      {/*sidebar menu for small screens*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
           <div className='flex flex-col text-gray-600'>
            <div onClick={()=>setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
              <img className='w-10 h-10' src={assets.leftarrows} alt="" />
              <p className='absolute left-10 top-4'>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
           </div>
      </div>
    </div>
  )
}

export default Navbar
