import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import  React, { useState } from 'react';

function App() {
  const[mode,setMode]=useState('dark');//says ki dark mode enable hai ki ni 
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About"/> */}
    <Navbar title="TextUtils" mode={mode}/>

    <div className="container my-4"> 
      <TextForm heading="Enter your text to analyse"/>
    <About/>  

    </div>
    
    </>
 );
}

export default App;
 