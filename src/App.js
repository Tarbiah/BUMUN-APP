// App.js

import React from 'react';

import Home from './components/Home/Home';
import Teams from './components/Teams/Teams';
import Directorates from './components/Directorates/Directorates';
import Unsc from './components/Unsc/Unsc';
import Unhrc from './components/Unhrc/Unhrc';
import Unwomen from './components/Unwomen/Unwomen';
import Pna from './components/Pna/Pna';
import Criciscell from './components/Criciscell/Criciscell';
import C40 from './components/C40/C40';
import Information from './components/Information/Information';
 // Import the corresponding CSS file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/directorates" element={<Directorates />} />
        <Route path="/unsc" element={<Unsc />} />
        <Route path="/unhrc" element={<Unhrc />} />
        <Route path="/unwomen" element={<Unwomen />} />
        <Route path="/pna" element={<Pna />} />
        <Route path="/criciscell" element={<Criciscell />} />
        <Route path="/c40" element={<C40 />} />
        <Route path="/info" element={<Information />} />
      </Routes>
     
    </Router>
  );
};

export default App;
