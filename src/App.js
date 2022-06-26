import React from 'react';
import Analytics1 from './components/Analyctics1';
import Analytics from './components/Analytics';
// import Dashboard from './components/Dashboard';
// import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Card from './components/Card';
// import CardFooter from './components/CardFooter';
// import CardHeader from './components/CardHeader';
import Navbar from './components/Navbar';
import { TinderProvider } from './context/TinderContext';
import { MoralisProvider } from 'react-moralis'

// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";



function App() {

  




  // return (
  //   <div>
  //     <Navbar />
  //     <Hero />
  //     <Analytics />
  //     <Analytics1 />
  //     <Dashboard/>
  //     <Footer />
  //   </div>
  // );


  return (
    <MoralisProvider
    serverUrl='https://rhojhxoy5zve.usemoralis.com:2053/server'
    appId='4LCPNZU122PxwMnO5nxHzUK32OG6OZIb3YE9ycgC'>
    <TinderProvider>
 
          {/* <Navbar />
          <Hero />
          <Analytics />
          <Analytics1 /> */}
         <Navbar />
         <Hero />
         <Analytics />
         <Analytics1 /> 
         {/* <Card/> */}
         <Footer />
         {/* <CardHeader/> */}
         
         {/* <CardFooter/> */}
        
        {/* <Route path='/dashboard' element= {<><Dashboard/> <CardHeader/><Card/> <CardFooter/></>} /> */}
        {/* <Dashboard/> */}
         {/* <CardHeader/>
         <Card/> 
         <CardFooter/> */}
        {/* <Footer/> */}
    
    </TinderProvider>
    </MoralisProvider>
  
  );
}


export default App;
