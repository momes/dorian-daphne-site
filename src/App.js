import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route, Redirect} from 'react-router-dom';
// import Home from './Home.js';
// import Store from './Store.js';
// import Projects from './Projects.js';
// import Shows from './Shows.js';
// import Home from './containers/Home';
import Projects from './containers/Projects';

import HomeMain from './containers/Home/index.js';
import Shows from './containers/Shows/index.js'
import EPKPage from './containers/EPK';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        {/* <Route path="/otherhome" element={<Home />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/shows" element={<Shows />} />
         {/* <Route path="/store" element={<Store />} /> */}
         <Route path="/one-sheet" element={<EPKPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
