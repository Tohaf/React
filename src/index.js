import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';
import DesForm from './pages/destination';
import RegisterData from './pages/get';
import LocationData from './pages/location';
import LocForm from './pages/status';





ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*'  element={<App />} />
      

      <Route path='/get' element={<RegisterData />} />

      <Route path='/destination' element={<DesForm />} />

      <Route path='/location' element={<LocationData />} />

      <Route path='/status' element={<LocForm />} />
      

    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

