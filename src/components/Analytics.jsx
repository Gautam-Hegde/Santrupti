import React from 'react';
import sentinel1 from '../assets/sentinel1.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-[#fcfcfc] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={sentinel1} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>Unlike destiny, poverty can be defeated</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Hunger Fast Facts</h1>
          <p>
          Food is produced in sufficient quantities to feed everyone on the earth.
Every night, 811 million people throughout the world go to bed hungry.
Only 25% of acutely malnourished children have access to lifesaving therapy, despite the fact that an estimated 14 million children under the age of five suffer from severe acute malnutrition, commonly known as severe wasting.
          </p>
          {/* new */}
          <p className='text-[#00df9a] font-bold '>The dApp ecosystem</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Why Santrupti?</h1>
          <p>
          Free from the control and interference of a single authority.Data is never lost,once information is added to the blockchain, it is stored permanently, which means dApps are more resistant to modifications or restrictions.
          center around the program's ability to safeguard user privacy. With decentralized apps, users do not need to submit their personal information to use the function the app provides. DApps use smart contracts to complete the transaction between two anonymous parties without the need to rely on a central authority.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
