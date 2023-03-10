import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import  React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
        setAlert(null);
    },4000);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#16213E';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <div className="container my-3">
        <Routes>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
              </Route>
        </Routes> 
        </div> */}
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={
            <About mode={mode}/>
            }>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router>
   
    </> 
  );
}

export default App;
 