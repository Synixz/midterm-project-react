import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayItems from './components/DisplayItem';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItem';
import LowStockItems from './components/LowStockItems';
import Navbar from './components/Navbar';
import './App.css';  

function App() {
  const [inventory, setInventory] = useState([]);

  return (
    <Router>
      <div className="container">  {}
        <h1 className="title">Inventory Management System</h1>
        <Navbar /> {}
        
        <Routes>
          <Route path="/add-item" element={<AddItem inventory={inventory} setInventory={setInventory} />} />
          <Route path="/update-item" element={<UpdateItem inventory={inventory} setInventory={setInventory} />} />
          <Route path="/remove-item" element={<RemoveItem inventory={inventory} setInventory={setInventory} />} />
          <Route path="/display-items" element={<DisplayItems inventory={inventory} />} />
          <Route path="/search-item" element={<SearchItem inventory={inventory} />} />
          <Route path="/sort-items" element={<SortItems inventory={inventory} setInventory={setInventory} />} />
          <Route path="/low-stock-items" element={<LowStockItems inventory={inventory} />} />
          <Route path="/" element={<div></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
