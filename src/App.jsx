import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Saldo from './pages/Saldo';
import Mutasi from './pages/Mutasi';
import { LoginForm } from './pages/LoginForm';
import './App.css';
import { Login } from './Login';



function App() {
  return (

    <div>
        <BrowserRouter>
          <Routes>
          <Route path ="/login" element={<LoginForm/>}/>
          <Route path ="/" element={<Home />}/>
          <Route path ="/saldo" element={<Saldo />}/>
          <Route path ="/mutasi" element={<Mutasi />}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;