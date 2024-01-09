import './App.css';
import React,{useState} from 'react'

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const setToogleMode = (bgColor)=>{
    removeBodyClasses();
    if(bgColor !== 'dark' || bgColor !== 'light') {
      document.body.classList.add('bg-'+bgColor);
    }
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert('Dark-mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light-mode has been enabled','success');
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils"  mode={mode} setToogleMode={setToogleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <Routes> 
        <Route path="/about" element={<About  mode={mode}/>} />
    </Routes>
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} /> } />
    </Routes>
    </div >
    </BrowserRouter>
    </>
  );
}

export default App;
