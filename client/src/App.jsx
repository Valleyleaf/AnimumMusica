import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './assets/Header/Header'
import Navbar from './assets/Navbar/Navbar'
import Footer from './assets/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)
  
  const handleButtonClick = (buttonName) => {
    console.log(buttonName);

  };
  return (
    <>
        <Header />
        <Navbar onButtonClick={handleButtonClick}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default App
