import React from 'react';
import agent from '../assets/agent.png';
import agent2 from '../assets/agent2.png';
import agent3 from '../assets/agent3.png';


const CustomerService = () =>{

    return(
            <div className='text-center my-4 p-4 font-[inter]'>
                <div className=''>
                    <p className='text-sm font-medium text-[#36AA71]'>Rent . Buy . Sell</p>
                    <h2 className='text-2xl py-4 font-semibold'>We help people buy, rent and sell homes</h2>
                    <p className='text-lg'>Home buying can be a stressful process, but we take the guess work out of finding a real estate agent.
                       <br/> We'll help you find the perfect match to purchase your ideal home.</p>
                </div>
                <div className='grid grid-cols-3 p-4 mt-16 gap-20'>
                    <div className='col-span-1'>
                        <img src={agent} className='w-[220px] h-[250px] mx-auto' alt="/" />
                        <div className='mt-8'>
                            <h1 className='text-2xl font-medium py-2'>Qualified Agents</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, Lorem ipsum dolor sit amet. </p>
                            <p className='text-normal mt-4 font-medium text-[#36AA71] cursor-pointer py-2 hover:underline'>Learn More</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <img src={agent2} className='w-[270px] h-[280px] mx-auto -mt-[30px]' alt="/" />
                        <div className='mt-8'>
                            <h1 className='text-2xl font-medium py-2'>Excellent Service</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, Lorem ipsum dolor sit amet. </p>
                            <p className='text-normal mt-4 font-medium text-[#36AA71] cursor-pointer py-2 hover:underline'>Learn More</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <img src={agent3} className='w-[220px] h-[250px] mx-auto' alt="/" />
                        <div className='mt-8'>
                            <h1 className='text-2xl font-medium py-2'>Customer Care</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, Lorem ipsum dolor sit amet. </p>
                            <p className='text-normal mt-4 font-medium text-[#36AA71] cursor-pointer py-2 hover:underline'>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CustomerService;