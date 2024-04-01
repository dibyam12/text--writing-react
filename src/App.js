import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route
  
} from "react-router-dom";



function App(props) {
  const [alert,setAlert]= useState(null);
  
  const showAlert =(message,type) =>
  {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);}
      ,1500
      )
    }
    const [mode, setMode] = useState('light');
    const toggleMode = ()=> {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='black';
        showAlert('Dark Mode Enabled','Success')
        
      }
      else{ setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert('light Mode Enabled','Success')
    }
  }
  const router = createBrowserRouter(
    
    
    [
  {
   path :"/about",
    element :
     <>
     <Navbar title="Textutils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
     <About mode={mode} toggleMode={toggleMode}/></>   
  },
  {
    path : "/",
    element : 
     <>  
          <Navbar title="Textutils" aboutText="About US" mode={mode} toggleMode={toggleMode} />
          <Alert alert= {alert}/>
          <TextForm showAlert ={showAlert} heading='Enter Text Below '  mode={mode} toggleMode={toggleMode} />
          
      </>

  }
  ]);
 { /*const Root = () =>{
    return (<>
      <Navbar title="Textutils" aboutText="About US" mode={mode} toggleMode={toggleMode} />

      <TextForm showAlert ={showAlert} heading='Enter Text Below '  mode={mode} toggleMode={toggleMode} />
      </>)
  }*/}
  return (
      <>
    <div className='container  my-3'>
  <RouterProvider router={router} />     
  </div>
    </>
    );
}

export default App;
