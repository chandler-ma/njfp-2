import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
