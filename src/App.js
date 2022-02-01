import './App.css';
import Home from './pages/Home.jsx'
import BeersList from './pages/BeersList.jsx'
import BeerDetails from './pages/BeerDetails'
import NewBeer from './pages/NewBeer'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
