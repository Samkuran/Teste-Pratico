import './App.css';
import Administrative from './pages/Administrative';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/administrativo' element={<Administrative/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
