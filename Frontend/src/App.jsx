import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About'
import Error from './pages/Error';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
    <nav><Navbar/></nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <footer><Footer/></footer>
    </BrowserRouter>
  )
}

export default App
