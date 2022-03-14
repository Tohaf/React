import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import './index.css';





ReactDOM.render(
  <BrowserRouter basename="/senditff" >
    <Routes>

      <Route exact path= '*'  element={<App />}  />
        
     
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

