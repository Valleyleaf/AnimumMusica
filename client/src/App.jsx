import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './assets/Header/Header'
import Navbar from './assets/Navbar/Navbar'
import Footer from './assets/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
