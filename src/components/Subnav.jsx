import React from 'react';
import Logo from '../assets/zameen-logo.png';


const Subnav = () =>{

  return(

    <div className='bg-[#f7f7f7] h-[41px] font-[inter] '>
        <div className='hidden w-[97%] mx-auto md:flex items-center py-[6px]  text-[#848484]  gap-6'>
            <img className='mr-6 scale-90' src={Logo} alt="" />
            <ul className='flex gap-6 text-sm items-center'>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>BUY </li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>HOMES</li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>PLOTS</li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>COMMERCIAL</li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>RENTS</li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>AGENTS</li>
                <li className='subnav-hover hover:text-[#33a137] cursor-pointer'>NEW PROJECTS</li>
            </ul>
        </div>
    </div>
        
  );
};

export default Subnav ;