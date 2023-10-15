import { HomePage } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Movies } from 'pages/Movies';
import { Header } from 'pages/Header';

// import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header/>
     
     <Routes>
     <Route> <Route path="/" element={<HomePage/>} /></Route>

      <Route> <Route path="/movie" element={<Movies />} /></Route>
     </Routes>
    </div>
  );
};
