import React from 'react';
// import FooterImg from '../assets/footer-img.png';

const Footer = () =>{

    return(
        // <img src={FooterImg} className='w-full' alt="/" />
        <div className='bg-gray-900 text-gray-200  py-10'>
            <div className='grid grid-cols-4 w-[90%] mx-auto'>
                <div className='col-span-1'>
                    <h2 className='py-4 text-xl font-semibold'>Company</h2>
                    <div>
                        <p className='cursor-pointer hover:underline py-1'>About Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Contact Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Jobs</p>
                        <p className='cursor-pointer hover:underline py-1'>Help & Support</p>
                        <p className='cursor-pointer hover:underline py-1'>Advertise On Zameen Terms Of Use</p>
                        <p className='cursor-pointer hover:underline py-1'>Terms Of Use</p>
                    </div>                    
                </div>
                {/* 2nd Column  */}
                <div className='col-span-1'>
                    <h2 className='py-4 text-xl font-semibold'>Connect</h2>
                    <div>
                        <p className='cursor-pointer hover:underline py-1'>Blog</p>
                        <p className='cursor-pointer hover:underline py-1'>News</p>
                        <p className='cursor-pointer hover:underline py-1'>Forum</p>
                        <p className='cursor-pointer hover:underline py-1'>Expo</p>
                        <p className='cursor-pointer hover:underline py-1'>Real Estate Agents</p>
                        <p className='cursor-pointer hover:underline py-1'>Add Property</p>
                    </div>                    
                </div>
                {/* 3rd column  */}
                <div className='col-span-1'>
                    <h2 className='py-4 text-xl font-semibold'>Company</h2>
                    <div>
                        <p className='cursor-pointer hover:underline py-1'>About Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Contact Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Jobs</p>
                        <p className='cursor-pointer hover:underline py-1'>Help & Support</p>
                        <p className='cursor-pointer hover:underline py-1'>Advertise On Zameen Terms Of Use</p>
                        <p className='cursor-pointer hover:underline py-1'>Terms Of Use</p>
                    </div>                    
                </div>
                {/* 4th Column  */}
                <div className='col-span-1'>
                    <h2 className='py-4 text-xl font-semibold'>Company</h2>
                    <div>
                        <p className='cursor-pointer hover:underline py-1'>About Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Contact Us</p>
                        <p className='cursor-pointer hover:underline py-1'>Jobs</p>
                        <p className='cursor-pointer hover:underline py-1'>Help & Support</p>
                        <p className='cursor-pointer hover:underline py-1'>Advertise On Zameen Terms Of Use</p>
                        <p className='cursor-pointer hover:underline py-1'>Terms Of Use</p>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Footer;