import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import {Header, Footer} from './assets/'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
    </>
  )
}

export default App
