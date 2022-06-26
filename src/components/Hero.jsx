import React from 'react';
import Typed from 'react-typed';
import "./hero.css"
import { useState } from 'react';
import { ethers } from 'ethers';

// import {AiOutlineWallet} from 'react-icons/ai';
// import sentinel3 from '../assets/sentinel3.jpg';
const Hero = () => {


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

// after installing ethers library to connect wallet

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined')
    {
      await requestAccount();
      const provider=new ethers.providers.Web3Provider(window.ethereum);

    }
  }
  //then change onclick listner to connectWallet



  return (
    <div className='text-white bg-cover'id='my_back' >
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#dff458] font-bold p-2'>
        Humanity above everything!
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Hunger ends here.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
          Share 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['food', 'clothes', 'happiness!']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#dff458]'>Feel like a broke-down engine, ain't got no drivin' wheel.
You all been down and lonesome, you know just how a poor man feels.</p>
        <button
        onClick={connectWallet}
        className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Connect your Wallet 🦊!</button>
        <h3>Wallet address :{walletAddress} </h3>
      </div>
    </div>
  );
};

export default Hero;
// AiOutlineWallet