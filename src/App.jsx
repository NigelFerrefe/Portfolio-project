
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import ErrorPage from './pages/ErrorPage';

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
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App
