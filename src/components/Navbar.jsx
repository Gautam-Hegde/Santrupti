import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

//test



  const[walletAddress,setWalletAddress]=useState("");
  
  
  
  //req access to users metamask wallet
    async function requestAccount(){
      //check if wallet exists
      if(window.ethereum){
        console.log("yes");
  
        try{
          const accounts=await window.ethereum.request({
            method:"eth_requestAccounts",
          });
          // console.log(accounts);
          setWalletAddress(accounts[0]);
  
        }catch(error){
          console.log("error connecting.....");
        }
  
  
      }else{
        alert("Please install metamask wallet");
      }
    }















  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#dff458]'>SANTRUPTI</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-2xl text-[#dff458]'>About</li>
        {/* <li className='p-4 text-1xl text-[#dff458]'>Connect Your Wallet</li> */}
        <li  onClick={requestAccount} className='p-4 text-2xl text-[#dff458]'> <a href="">Connect Wallet</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SANTRUPTI</h1>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Connect Your Wallet</li>
      </ul>
    </div>
  );
};

export default Navbar;
