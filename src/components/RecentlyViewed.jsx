import React from 'react';
import { BiBed } from 'react-icons/bi';
import { MdShower } from 'react-icons/md';
import { AiOutlineCar, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaChartArea } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import { BsEnvelope } from 'react-icons/bs';


import PropertyOne from '../assets/propertyOne.jpg';


const RecentlyViewed = () => {
  return (
    <div className='text-center p-2 mb-8 font-[inter] w-[98%] mx-auto'>
        <p className='text-2xl py-4 font-medium pt-10 tracking-widest'>RecentlyViewed</p>
        <div className='grid grid-cols-4 mt-8 gap-3'>
            <div className='col-span-1 border-[1px] border-gray-300 rounded'>
                <div className=''>
                  <img src={PropertyOne} alt="/" />
                </div>
                <div className='text-left px-4 py-2'>
                  <p className='text-sm py-2'>APARTMENT</p>
                  <p className='text-lg font-medium pb-4'>RS 28,000,000</p>
                  <p className='text-md font-medium py-2'>Spacious Apartment</p>
                  <p className='text-sm  text-gray-500'>D Block Gulberg, Lahore</p>
                  <div className='flex gap-4 text-xl py-2 text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <BiBed/>
                      <p className='text-sm'>4</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MdShower/>
                      <p className='text-sm'>3</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <AiOutlineCar/>
                      <p className='text-sm'>2</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 pb-2  text-xl text-gray-500'>
                    <FaChartArea/>
                    <p className='text-base font-medium ml-2 text-gray-800'>2800</p>
                    <p className='text-xs'>SqFt</p>                    
                  </div>
                  {/* call to action  */}
                  <div id="callToAction" className='flex pt-2 border-t-[1px] text-[var(--accent-color)] border-gray-300 gap-1 text-lg'>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-4 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BiPhoneCall />
                      <p>Call</p>
                    </div>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-5 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BsEnvelope />
                      <p>Email</p>
                    </div>
                    <div className='border-[1px] flex items-center border-[var(--accent-color)] px-3 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <AiOutlineWhatsApp size={25}/>
                    </div>
                  </div>
                </div>
            </div>
            {/* Second column  */}
            <div className='col-span-1 border-[1px] border-gray-300 rounded'>
                <div className=''>
                  <img src={PropertyOne} alt="/" />
                </div>
                <div className='text-left px-4 py-2'>
                  <p className='text-sm py-2'>APARTMENT</p>
                  <p className='text-lg font-medium pb-4'>RS 28,000,000</p>
                  <p className='text-md font-medium py-2'>Spacious Apartment</p>
                  <p className='text-sm  text-gray-500'>D Block Gulberg, Lahore</p>
                  <div className='flex gap-4 text-xl py-2 text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <BiBed/>
                      <p className='text-sm'>4</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MdShower/>
                      <p className='text-sm'>3</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <AiOutlineCar/>
                      <p className='text-sm'>2</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 pb-2  text-xl text-gray-500'>
                    <FaChartArea/>
                    <p className='text-base font-medium ml-2 text-gray-800'>2800</p>
                    <p className='text-xs'>SqFt</p>                    
                  </div>
                  {/* call to action  */}
                  <div id="callToAction" className='flex pt-2 border-t-[1px] text-[var(--accent-color)] border-gray-300 gap-1 text-lg'>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-4 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BiPhoneCall />
                      <p>Call</p>
                    </div>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-5 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BsEnvelope />
                      <p>Email</p>
                    </div>
                    <div className='border-[1px] flex items-center border-[var(--accent-color)] px-3 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <AiOutlineWhatsApp size={25}/>
                    </div>
                  </div>
                </div>
            </div>
            {/* Third Column  */}
            <div className='col-span-1 border-[1px] border-gray-300 rounded'>
                <div className=''>
                  <img src={PropertyOne} alt="/" />
                </div>
                <div className='text-left px-4 py-2'>
                  <p className='text-sm py-2'>APARTMENT</p>
                  <p className='text-lg font-medium pb-4'>RS 28,000,000</p>
                  <p className='text-md font-medium py-2'>Spacious Apartment</p>
                  <p className='text-sm  text-gray-500'>D Block Gulberg, Lahore</p>
                  <div className='flex gap-4 text-xl py-2 text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <BiBed/>
                      <p className='text-sm'>4</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MdShower/>
                      <p className='text-sm'>3</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <AiOutlineCar/>
                      <p className='text-sm'>2</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 pb-2  text-xl text-gray-500'>
                    <FaChartArea/>
                    <p className='text-base font-medium ml-2 text-gray-800'>2800</p>
                    <p className='text-xs'>SqFt</p>                    
                  </div>
                  {/* call to action  */}
                  <div id="callToAction" className='flex pt-2 border-t-[1px] text-[var(--accent-color)] border-gray-300 gap-1 text-lg'>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-4 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BiPhoneCall />
                      <p>Call</p>
                    </div>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-5 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BsEnvelope />
                      <p>Email</p>
                    </div>
                    <div className='border-[1px] flex items-center border-[var(--accent-color)] px-3 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <AiOutlineWhatsApp size={25}/>
                    </div>
                  </div>
                </div>
            </div>
            {/* Fourth Column  */}
            <div className='col-span-1 border-[1px] border-gray-300 rounded'>
                <div className=''>
                  <img src={PropertyOne} alt="/" />
                </div>
                <div className='text-left px-4 py-2'>
                  <p className='text-sm py-2'>APARTMENT</p>
                  <p className='text-lg font-medium pb-4'>RS 28,000,000</p>
                  <p className='text-md font-medium py-2'>Spacious Apartment</p>
                  <p className='text-sm  text-gray-500'>D Block Gulberg, Lahore</p>
                  <div className='flex gap-4 text-xl py-2 text-gray-600'>
                    <div className='flex items-center gap-2'>
                      <BiBed/>
                      <p className='text-sm'>4</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MdShower/>
                      <p className='text-sm'>3</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <AiOutlineCar/>
                      <p className='text-sm'>2</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 pb-2  text-xl text-gray-500'>
                    <FaChartArea/>
                    <p className='text-base font-medium ml-2 text-gray-800'>2800</p>
                    <p className='text-xs'>SqFt</p>                    
                  </div>
                  {/* call to action  */}
                  <div id="callToAction" className='flex pt-2 border-t-[1px] text-[var(--accent-color)] border-gray-300 gap-1 text-lg'>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-4 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BiPhoneCall />
                      <p>Call</p>
                    </div>
                    <div className='border-[1px] flex gap-1 items-center border-[var(--accent-color)] px-5 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <BsEnvelope />
                      <p>Email</p>
                    </div>
                    <div className='border-[1px] flex items-center border-[var(--accent-color)] px-3 py-2 rounded-md hover:text-white hover:bg-[var(--accent-color)] cursor-pointer'>
                      <AiOutlineWhatsApp size={25}/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default RecentlyViewed;