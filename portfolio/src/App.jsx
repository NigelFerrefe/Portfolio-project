
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' />
        <Route path='/projects'/>
        <Route path='/portfolio'/>
        <Route path='/about'/>
        <Route path='/contact'/>
      </Routes>
    </>
  )
}

export default App
