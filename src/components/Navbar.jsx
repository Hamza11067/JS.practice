import React from 'react';
import { useState } from 'react';
import { AiFillHome, AiOutlinePlus, AiOutlineSearch, AiOutlineClose, AiOutlineMenu, AiTwotoneSetting } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';

import Flag from '../assets/Flag.png';



const Navbar = () =>{

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return(
    <nav className="bg-[#36AA71] py-[8px] h-[40px] font-[inter]">
      <div className="w-[95%] mx-auto flex justify-between items-center text-sm">
        <div className="right-nav flex gap-2 items-center">
            <div className="logo text-white text-[20px] flex items-center gap-3">
              <AiFillHome/>
              <h1 className="sm:hidden font-bold">Wahid.pk</h1>
            </div>
            <ul className="hidden sm:flex text-white font-semibold gap-4">
                <li className='nav-hover cursor-pointer'>PROPERTIES</li>
                <li className='nav-hover cursor-pointer'>PLOTS FINDER</li>
                <li className='nav-hover cursor-pointer'>AREA GUIDES</li>
                <li className='nav-hover cursor-pointer'>BLOGS</li>
                <li className='nav-hover cursor-pointer'>MAPS</li>
                <li className='flex items-center nav-hover cursor-pointer'>
                  <p>TOOLS</p>
                  <MdArrowDropDown className='text-xl'/>
                </li>
                <li className='flex items-center nav-hover cursor-pointer'>
                  <p>MORE</p>
                  <MdArrowDropDown className='text-xl'/>
                </li>                        
            </ul>
        </div>
        <div className="left-nav hidden lg:flex gap-4">
            <button className='border-white border-[1px] px-2 py-[1px] rounded flex items-center cursor-text'>
              <input type="text" placeholder='Property ID' className='bg-transparent placeholder-white  caret-white focus:outline-none ' />
              <AiOutlineSearch className='text-sm -ml-12 cursor-pointer'/> 
            </button>
            <button className="bg-white hover:bg-[#f7f7f7] text-black px-2 py-[1px] rounded flex items-center gap-2">
              <AiOutlinePlus className='text-md font-black'/>
              <p>Add property</p>
            </button>
            <img className="w-6 cursor-pointer" src={Flag} alt="/" />
            <AiTwotoneSetting className='text-white text-2xl cursor-pointer' />
            <BsFillPersonFill className='text-white text-2xl cursor-pointer'/>
        </div>
        {/* for-small-screens  */}
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose className='text-white' size={20}/> : <AiOutlineMenu className='text-white' size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 text-white w-[70%] h-full border-r border-r-gray-900 bg-[#36AA71] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold mx-4 mt-4 mb-8'>Wahid.pk</h1>
            <li className='p-4 text-xl font border-b border-white'>Home</li>
            <li className='p-4 text-xl font border-b border-white'>Company</li>
            <li className='p-4 text-xl font border-b border-white'>Resources</li>
            <li className='p-4 text-xl font border-b border-white'>About</li>
            <li className='p-4 text-xl font'>Contact</li>
        </ul>
      </div>
    </nav>
  );

}; 

export default Navbar;
