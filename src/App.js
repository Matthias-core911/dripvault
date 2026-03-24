import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* navbar goes here */}
      {/* it contains the navigation bar */}
        <Navbar/>
      <header className="App-header">
       <h1>Drip <span className='text-danger'>Vault</span></h1>
      </header>
      <nav>
        <Link to ='/signup' className='btn btn-danger btn-sm m-2'>Signup</Link>
        <Link to ='/signin' className='btn btn-success btn-sm m-2'>Signin</Link>
        <Link to ='/' className='btn btn-warning btn-sm m-2'>Getproduct</Link>
        <Link to ='/addproduct' className='btn btn-secondary btn-sm m-2'>Addproduct</Link>
      </nav>
        {/* route goes here */}
        <Routes>
          <Route path='/' element={<Getproduct/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/makepayment' element={<Mpesapayment/>} />
        </Routes>
      
    </div>
    </BrowserRouter>   
  );
}

export default App;
