import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-4"> 
    <About/>
      <TextForm heading="Enter your text to analyse"/>
     

    </div>
    
    </>
 );
}

export default App;
 