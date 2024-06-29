
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
function App() {
  return (
    <div className='dark'>
       <BrowserRouter>
         <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        

        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
