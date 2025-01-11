import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Course from './course';
import Home from './Home';
import Login from'./Login';
import Signup from './Signup';


function App() {
  return (
      <div>
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Sign up' element={<Signup/>}/>

          <Route path="/Course" element={<Course />} />
          <Route path="/Login" element={<Login />} />

        
        </Routes>
        
      </div>
  );
}

export default App;
