import React from 'react';
import contact from '../assets/Contact.png';


const Contact = () =>{

    return(
        <div className='flex w-[93%] h-[350px] rounded-2xl mx-auto my-4 shadow-2xl font-[inter] overflow-hidden'>
            <div className='py-12 pl-16 pr-12 flex-[50%] flex flex-col justify-center'>
                <h2 className='text-2xl font-medium'>Interested in selling your home?</h2>
                <p className='py-6 text-lg leading-relaxed'>Buy or sell your home with our agents. House prices, inspections, negotiations and other services are included in the house price.</p>
                <button className='bg-[var(--accent-color)] hover:bg-[var(--accent-hover)] w-[40%] tracking-widest text-white text-sm font-medium rounded-full px-6 py-3 mt-4'>CONTACT US</button>            
            </div>
            <div className='contact-img flex-[50%] '>
                <img src={contact} alt="/" className='w-full items-center ' />
            </div>
        </div>
 );
};

export default Contact;