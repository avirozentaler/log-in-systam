import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import LogIn from '../src/components/LogIn/LogIn';
import Register from './components/Register/Register';
import Deshboard from './components/Deshboard/Deshboard';


function App() {
  return (
    <div className='App'>
 <BrowserRouter>
    <Routes >
        <Route path='/' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/deshboard' element={<Deshboard />} />
    </Routes>
 </BrowserRouter>
    </div>
   

  );
}

export default App;
