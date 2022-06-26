import React from 'react';
import sentinel4 from '../assets/sentinel4.jpg';

const Analytics1 = () => {
  return (
    <div className='w-full bg-[#CDF0EA]  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={sentinel4} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Offer a hand today to end poverty</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>You should back them up</h1>
          <p>
          Many of India's poor and downtrodden people lack proper attire. Donating clothes not only improves the lives of the poor, but it also promotes the environmentally good concept of recycling.

We have clothes that no longer fit us in our metropolitan residences. Every year, when youngsters grow older, they outgrow their clothing. So, instead of storing or discarding old clothes, consider donating them because what you consider garbage could be a valuable resource for those in need.
          </p>
          {/* new */}
          <p className='text-[#00df9a] font-bold '>The dApp ecosystem</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum </h1>
          <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae omnis officiis impedit doloribus quos quod nostrum accusamus enim, perspiciatis et recusandae est laborum totam Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni blanditiis voluptate cupiditate neque atque nam esse cumque omnis ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint, earum eum, facilis facere beatae ipsa, aspernatur sequi quaerat porro error laboriosam modi vel ex.!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics1;
