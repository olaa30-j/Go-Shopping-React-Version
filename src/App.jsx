import { useState } from 'react'
import './App.css'
import RegularCard from './components/RegularCard';
import DefaultNavbar from './components/navbar/DefaultNavbar';
import Home from './screens/Home';

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () =>{
  
    setMode((prevMode)=>{
      const newMode = !prevMode;
      if(newMode){
        document.body.classList.add("theme-dark");  
      } else {
          document.body.classList.remove("theme-dark");
      }  
      return newMode
    });  
  }


  return (
    <>
      <DefaultNavbar/>
      <div className='container'>
        <Home/>
        {/* <button onClick={toggleMode}>toggle</button> */}
        {/* <RegularCard/> */}
      </div>
    </>
  )
}

export default App
  

