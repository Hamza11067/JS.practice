import React from 'react';
import Typed from 'react-typed';
import { MdArrowDropDown } from 'react-icons/md';


const Header = () =>{

  return (

    <div className='w-ful font-[inter] flex items-center justify-center bg-[#D9FFEC] h-[480px] border-2 border-y-[#D7D7D7]  '>
      <div className=' mt-8'>
        <div className='flex items-center justify-center'>
          <h1 className='text-[1.8rem] text-center'>Search properties</h1>
          <Typed
              className='text-[1.8rem] pl-2'
              strings={['for sale', 'for rent', 'to buy']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
        </div>  
        <div className='text-[1.2rem] flex justify-center items-center gap-4 py-4 '>
          <button className='border-[2px] border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white w-[7rem] rounded-md h-[38px]'>Rent</button>
          <button className='border-[2px] border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white w-[7rem] rounded-md h-[38px]'>Buy</button>
          <button className='border-[2px] border-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-white w-[7rem] rounded-md h-[38px]'>Projects</button>
        </div>
        {/* Input boxes start  */}
        <div className='bg-gray-600 w-[700px] p-2 gap-2 rounded-lg mt-2'>
          <div className=' grid grid-cols-4 gap-2'>
            <div className='p-2 rounded-lg cursor-pointer bg-white'>
              <div className='text-xs text-gray-500'>CITY</div>
              <div className="dropdown text-base flex justify-between items-end">
                <div>Lahore</div>
                <MdArrowDropDown size={30}/>
              </div>
            </div>
            <div className='p-2 rounded-lg bg-white col-span-2 flex flex-col justify-between'>
              <div className='text-xs text-gray-500'>LOCATION</div>
              <input type="text" className='focus:outline-none w-full'/>
            </div>
            <div className=' rounded-lg cursor-pointer flex justify-center items-center font-medium hover:bg-[var(--accent-hover)] bg-[var(--accent-color)] text-white'>FIND</div>
          </div>
          {/* bottom-input-section  */}
          <div className='gap-2 grid grid-cols-4 pt-2' >
            <div className='p-2 rounded-lg cursor-pointer bg-white '>
              <div className='text-xs text-gray-500'>PROPERTY TYPE</div>
              <div className="dropdown text-base flex justify-between items-end">
                <div>Homes</div>
                <MdArrowDropDown size={30} className=''/>
              </div>
            </div>
            <div className='p-2 rounded-lg cursor-pointer bg-white'>
              <div className='text-xs text-gray-500'>PRICE (PKR)</div>
              <div className="dropdown text-base flex justify-between items-end">
                <div>0</div>
                <div>to any</div>
                <MdArrowDropDown size={30}/>
              </div>
            </div>
            <div className='p-2 rounded-lg cursor-pointer bg-white'>
              <div className='text-xs text-gray-500'>AREA (SQFT)</div>
              <div className="dropdown text-base flex justify-between items-end">
                <div>0</div>
                <div>to any</div>
                <MdArrowDropDown size={30}/>
              </div>
            </div>
            <div className='p-2 rounded-lg cursor-pointer bg-white'>
              <div className='text-xs text-gray-500'>BEDS</div>
              <div className="dropdown text-base flex justify-between items-end">
                <div>All</div>
                <MdArrowDropDown size={30}/>
              </div>
            </div>         
          </div>
          {/* minor-detailing  */}
          <div className='text-white flex items-end gap-2 mt-2 text-sm'>
            <div className='flex items-end cursor-pointer hover:text-blue-400'>
              <MdArrowDropDown size={25} className=' -mb-1'/>
              <p id='moreOptions' className='hidden'>More Options</p>
              <p id='lessOptions'>Less Options</p>
            </div>
            <p>|</p>
            <p className='cursor-pointer hover:underline text-blue-400'>Change Currency</p>
            <p>|</p>
            <p className='cursor-pointer hover:underline text-blue-400'>Change Area Unit</p>
            <p>|</p>
            <p className='cursor-pointer hover:underline text-blue-400'>Reset Area Search</p>
          </div>
        </div>
      </div>
    </div>
    
 );
};

export default Header ;