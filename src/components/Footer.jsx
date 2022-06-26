import React from 'react';
import {

  FaGithubSquare,
  FaInstagram,
 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-16 grid lg:grid-cols-3 gap-5 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SANTRUPTI</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
       
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'> Made with 🔥 by Binary Blinders
        at Sentinel Hack 3.O</h6>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaInstagram size={30} />
            <FaInstagram size={30} />
            <FaGithubSquare size={30} />
        </div>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Learn More</h6>
        <ul>
            <li className='py-2 text-sm'>Blockchain</li>
            <li className='py-2 text-sm'>Decentralised applications</li>
            <li className='py-2 text-sm'>Ethereum</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
