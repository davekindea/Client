import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About'
import Error from './pages/Error';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
