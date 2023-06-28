import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Download from './components/Download';
import Contact from './components/Contact';
import React from 'react';
import MetaTags from 'react-meta-tags';
import Chatbots from './components/Chatbots';
import NearbyLocations from './components/Location';


function App() {
  return (
    <div className="App">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </MetaTags>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/NearbyLocations' element={<NearbyLocations/>}/>
        <Route path='/chatbots' element={<Chatbots/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
