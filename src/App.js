import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About"/>
    <div className="container my-4">
      <TextForm heading="Enter your text to analyse"/>
    </div>
    
    </>
 );
}

export default App;
 